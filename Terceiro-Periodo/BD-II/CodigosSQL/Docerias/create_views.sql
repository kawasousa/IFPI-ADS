-- CUPONS VALIDOS
CREATE OR REPLACE VIEW CUPONS_VALIDOS AS
SELECT * FROM CUPOM WHERE USOS_RESTANTES > 0;
-- PRODUTOS COM ESTOQUE
CREATE OR REPLACE VIEW VW_PRODUTOS_COM_ESTOQUE AS
SELECT P.COD_PRODUTO, P.NOME AS NOME_PRODUTO, P.PRECO_UNIT, L.COD_LOJA, L.NOME AS NOME_LOJA, E.QUANTIDADE
FROM
    ESTOQUE AS E JOIN PRODUTO AS P ON E.COD_PRODUTO = P.COD_PRODUTO JOIN LOJA AS L ON E.COD_LOJA = L.COD_LOJA
WHERE
    E.QUANTIDADE > 0
ORDER BY
    E.QUANTIDADE, L.NOME, P.NOME;
-- CLIENTES SEGMENTADOS
CREATE OR REPLACE VIEW SEGMENTACAO_CLIENTES AS
WITH rfm_base AS (
    -- Passo 1: Calcular Recência, Frequência e Valor para cada cliente.
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
)
-- Passo 2: Selecionar os dados e atribuir um segmento com base em valores absolutos.
SELECT
    b.COD_CLIENTE,
    b.NOME AS nome_cliente,
    b.recencia,
    b.frequencia,
    b.valor_monetario,
    -- Lógica de segmentação baseada em limites fixos.
    -- Estes valores podem ser ajustados conforme o negócio amadurece.
    CASE
        WHEN b.frequencia > 1 AND b.valor_monetario > 150 THEN 'Cliente VIP'
        WHEN b.frequencia > 1 THEN 'Cliente Fiel'
        WHEN b.frequencia = 1 AND b.recencia <= 30 THEN 'Cliente Novo'
        WHEN b.frequencia = 1 AND b.recencia > 30 AND b.recencia <= 90 THEN 'Cliente em Risco'
        WHEN b.recencia > 90 THEN 'Cliente Perdido'
        ELSE 'Comprador Ocasional'
    END AS segmento
FROM rfm_base b;