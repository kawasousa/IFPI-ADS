CREATE OR REPLACE FUNCTION OBTER_RANKING( p_data_inicio DATE, p_data_fim DATE, p_parametro TEXT)
RETURNS TABLE(cod_loja INT, nome_loja VARCHAR, valor NUMERIC, rank BIGINT)
AS $$
BEGIN
    -- Valida o parâmetro de entrada para evitar SQL Injection e erros.
    IF lower(p_parametro) NOT IN ('vendas', 'faturamento') THEN
        RAISE EXCEPTION 'Parâmetro inválido. Use "vendas" ou "faturamento".';
    END IF;

    -- A query é construída dinamicamente para acomodar os diferentes parâmetros.
    RETURN QUERY
    WITH ranking_data AS (
        SELECT
            l.COD_LOJA,
            l.NOME,
            -- A cláusula CASE seleciona a métrica correta com base no parâmetro.
            CASE
                WHEN lower(p_parametro) = 'vendas' THEN COUNT(v.COD_VENDA)::NUMERIC
                WHEN lower(p_parametro) = 'faturamento' THEN SUM(v.VALOR_TOTAL)
            END AS metrica
        FROM LOJA l
        LEFT JOIN VENDA v ON l.COD_LOJA = v.COD_LOJA
        WHERE v.DATA_VENDA BETWEEN p_data_inicio AND p_data_fim
        GROUP BY l.COD_LOJA, l.NOME
    )
    -- A função de janela RANK() é usada para calcular a posição de cada loja.
    SELECT
        rd.COD_LOJA,
        rd.NOME,
        rd.metrica,
        RANK() OVER (ORDER BY rd.metrica DESC) AS rank
    FROM ranking_data rd;

END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE FUNCTION OBTER_BALANCO(p_data_inicio DATE, p_data_fim DATE)
RETURNS TABLE( receita_total NUMERIC, despesa_total NUMERIC, balanco NUMERIC)
AS $$
DECLARE
    v_receita_vendas NUMERIC;
    v_despesa_salarios NUMERIC;
    v_despesa_lotes NUMERIC;
BEGIN
    -- 1. Calcula a receita total somando o valor de todas as vendas no período.
    SELECT COALESCE(SUM(VALOR_TOTAL), 0)
    INTO v_receita_vendas
    FROM VENDA
    WHERE DATA_VENDA BETWEEN p_data_inicio AND p_data_fim;

    -- 2. Calcula a despesa total com salários.
    -- Esta é uma aproximação que multiplica o salário atual pelo número de meses no período.
    SELECT COALESCE(SUM(c.SALARIO), 0) * (EXTRACT(YEAR FROM p_data_fim) - EXTRACT(YEAR FROM p_data_inicio)) * 12 +
           (EXTRACT(MONTH FROM p_data_fim) - EXTRACT(MONTH FROM p_data_inicio) + 1)
    INTO v_despesa_salarios
    FROM FUNCIONARIO f
    JOIN CARGO c ON f.COD_CARGO = c.COD_CARGO;

    -- 3. Calcula a despesa com a compra de lotes de produtos no período.
    SELECT COALESCE(SUM(VALOR_COMPRA), 0)
    INTO v_despesa_lotes
    FROM LOTE
    WHERE DATA_COMPRA BETWEEN p_data_inicio AND p_data_fim;

    -- Retorna os valores calculados.
    RETURN QUERY
    SELECT
        v_receita_vendas AS receita_total,
        (v_despesa_salarios + v_despesa_lotes) AS despesa_total,
        (v_receita_vendas - (v_despesa_salarios + v_despesa_lotes)) AS balanco;

END;
$$ LANGUAGE plpgsql;



CREATE OR REPLACE FUNCTION SEGMENTAR_CLIENTES()
RETURNS TABLE(cod_cliente INT, nome_cliente VARCHAR, recencia INT, frequencia BIGINT, valor_monetario NUMERIC, segmento TEXT)
AS $$
BEGIN
    RETURN QUERY
    WITH rfm_base AS (
        -- Calcula Recência, Frequência e Valor para cada cliente.
        SELECT
            c.COD_CLIENTE,
            c.NOME,
            -- Recência: dias desde a última compra.
            (NOW()::DATE - MAX(v.DATA_VENDA)) AS recencia,
            -- Frequência: número total de compras.
            COUNT(v.COD_VENDA) AS frequencia,
            -- Valor Monetário: soma total gasta.
            SUM(v.VALOR_TOTAL) AS valor_monetario
        FROM CLIENTE c
        JOIN VENDA v ON c.COD_CLIENTE = v.COD_CLIENTE
        GROUP BY c.COD_CLIENTE, c.NOME
    ),
    rfm_scores AS (
        -- Atribui pontuações de 1 a 4 para cada métrica (maior é melhor).
        SELECT
            COD_CLIENTE,
            NOME,
            recencia,
            frequencia,
            valor_monetario,
            -- NTILE divide os clientes em 4 grupos.
            -- Para recência, menor é melhor, então ordenamos ascendente.
            NTILE(4) OVER (ORDER BY recencia DESC) AS r_score, -- Menor recência = maior score
            -- Para frequência e valor, maior é melhor, então ordenamos descendente.
            NTILE(4) OVER (ORDER BY frequencia ASC) AS f_score,
            NTILE(4) OVER (ORDER BY valor_monetario ASC) AS m_score
        FROM rfm_base
    )
    -- Seleciona os dados e atribui um segmento com base nas pontuações.
    SELECT
        rs.COD_CLIENTE,
        rs.NOME,
        rs.recencia,
        rs.frequencia,
        rs.valor_monetario,
        -- A lógica de segmentação pode ser ajustada conforme a necessidade do negócio.
        CASE
            WHEN rs.r_score = 4 AND rs.f_score >= 3 AND rs.m_score >= 3 THEN 'Clientes VIP'
            WHEN rs.r_score >= 3 AND rs.f_score >= 3 THEN 'Clientes Fiéis'
            WHEN rs.r_score >= 3 AND rs.f_score <= 2 THEN 'Compradores Recentes'
            WHEN rs.r_score <= 2 AND rs.f_score >= 3 THEN 'Clientes em Risco'
            WHEN rs.r_score <= 2 AND rs.f_score <= 2 THEN 'Clientes Inativos'
            WHEN rs.r_score = 1 THEN 'Clientes Perdidos'
            ELSE 'Outros'
        END AS segmento
    FROM rfm_scores
    ORDER BY frequencia DESC, valor_monetario DESC;

END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION ANALISAR_CUPONS( p_data_inicio DATE, p_data_fim DATE)
RETURNS TABLE( cod_cupom INT, descricao_cupom TEXT, vezes_usado BIGINT, vendas_geradas NUMERIC, desconto_concedido NUMERIC)
AS $$
BEGIN
    RETURN QUERY
    SELECT
        c.COD_CUPOM,
        c.DESCRICAO,
        -- Conta quantas vendas usaram o cupom.
        COUNT(v.COD_VENDA) AS vezes_usado,
        -- Soma o valor total das vendas que usaram o cupom.
        SUM(v.VALOR_TOTAL) AS vendas_geradas,
        -- Calcula o valor total do desconto.
        -- Valor Original = Valor com Desconto / (1 - (Porcentagem / 100))
        -- Desconto = Valor Original - Valor com Desconto
        SUM( (v.VALOR_TOTAL / (1 - c.PORCENTAGEM / 100.0)) - v.VALOR_TOTAL ) AS desconto_concedido
    FROM CUPOM c
    JOIN VENDA v ON c.COD_CUPOM = v.COD_CUPOM
    WHERE v.DATA_VENDA BETWEEN p_data_inicio AND p_data_fim
    GROUP BY c.COD_CUPOM, c.DESCRICAO
    ORDER BY vezes_usado DESC;

END;
$$ LANGUAGE plpgsql;


CREATE OR REPLACE FUNCTION OBTER_ALERTA_ESTOQUE( p_limite_inferior INT, p_dias_sem_venda INT)
RETURNS TABLE( cod_produto INT, nome_produto VARCHAR, cod_loja INT, nome_loja VARCHAR, quantidade_atual INT, alerta TEXT)
AS $$
BEGIN
    RETURN QUERY
    -- CTE para encontrar a data da última venda de cada produto em cada loja
    WITH ultima_venda AS (
        SELECT
            i.COD_PRODUTO,
            v.COD_LOJA,
            MAX(v.DATA_VENDA) AS data_ultima_venda
        FROM ITEM i
        JOIN VENDA v ON i.COD_VENDA = v.COD_VENDA
        GROUP BY i.COD_PRODUTO, v.COD_LOJA
    )
    -- Query principal que combina os alertas de estoque crítico e lento
    SELECT
        p.COD_PRODUTO,
        p.NOME,
        e.COD_LOJA,
        l.NOME,
        e.QUANTIDADE,
        -- Define o tipo de alerta com base nas condições
        CASE
            -- Caso 1: Estoque crítico E lento
            WHEN e.QUANTIDADE < p_limite_inferior AND (uv.data_ultima_venda IS NULL OR uv.data_ultima_venda < (NOW() - (p_dias_sem_venda || ' days')::INTERVAL))
                THEN 'Crítico e Lento'
            -- Caso 2: Apenas estoque crítico
            WHEN e.QUANTIDADE < p_limite_inferior
                THEN 'Estoque Crítico'
            -- Caso 3: Apenas estoque lento
            WHEN uv.data_ultima_venda IS NULL OR uv.data_ultima_venda < (NOW() - (p_dias_sem_venda || ' days')::INTERVAL)
                THEN 'Estoque Lento'
            ELSE 'OK' -- Este caso não será retornado por causa do WHERE
        END AS alerta
    FROM ESTOQUE e
    JOIN PRODUTO p ON e.COD_PRODUTO = p.COD_PRODUTO
    JOIN LOJA l ON e.COD_LOJA = l.COD_LOJA
    LEFT JOIN ultima_venda uv ON e.COD_PRODUTO = uv.COD_PRODUTO AND e.COD_LOJA = uv.COD_LOJA
    -- Filtra para incluir apenas os produtos que atendem a pelo menos uma das condições de alerta
    WHERE
        e.QUANTIDADE < p_limite_inferior
        OR uv.data_ultima_venda IS NULL
        OR uv.data_ultima_venda < (NOW() - (p_dias_sem_venda || ' days')::INTERVAL);

END;
$$ LANGUAGE plpgsql;