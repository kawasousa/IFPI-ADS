-- ADICIONAR NOVO LOTE
CREATE OR REPLACE FUNCTION ADICIONAR_NOVO_LOTE()
RETURNS TRIGGER AS $$
BEGIN
    INSERT INTO ESTOQUE (COD_PRODUTO, COD_LOJA, QUANTIDADE)
    VALUES (NEW.COD_PRODUTO, NEW.COD_LOJA, NEW.QUANTIDADE)
    ON CONFLICT (COD_PRODUTO, COD_LOJA)
    DO UPDATE SET QUANTIDADE = ESTOQUE.QUANTIDADE + NEW.QUANTIDADE;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TG_ADICIONAR_NOVO_LOTE
AFTER INSERT
ON LOTE
FOR EACH ROW
EXECUTE FUNCTION ADICIONAR_NOVO_LOTE();

-- VALIDAR CADASTRO DE CUPOM
CREATE OR REPLACE FUNCTION VALIDAR_CUPOM()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.PORCENTAGEM NOT BETWEEN 0 AND 100 THEN
        -- Se estiver fora, lança uma exceção, cancelando a operação.
        RAISE EXCEPTION 'A porcentagem de desconto do cupom deve estar entre 0 e 100.';
    END IF;

    -- Se a validação passar, permite que a operação continue.
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TG_VALIDAR_CUPOM
BEFORE INSERT OR UPDATE
ON CUPOM
FOR EACH ROW
EXECUTE FUNCTION VALIDAR_CUPOM();

-- VALIDAR VENDA
CREATE OR REPLACE FUNCTION VALIDAR_VENDA()
RETURNS TRIGGER AS $$
DECLARE
    v_cod_loja_funcionario INT;
    v_titulo_cargo VARCHAR(50);
BEGIN
    SELECT F.COD_LOJA, C.TITULO INTO v_cod_loja_funcionario, v_titulo_cargo
    FROM FUNCIONARIO F
    JOIN CARGO C ON F.COD_CARGO = C.COD_CARGO
    WHERE F.COD_FUNCIONARIO = NEW.COD_FUNCIONARIO;

    -- 1. Valida se o funcionário pertence à mesma loja onde a venda está sendo feita.
    IF v_cod_loja_funcionario IS NULL OR v_cod_loja_funcionario <> NEW.COD_LOJA THEN
        RAISE EXCEPTION 'O funcionário não pertence à loja onde a venda está sendo registrada.';
    END IF;

    -- 2. Valida se o cargo do funcionário é 'Vendedor'.
    --    Usamos LOWER() para não diferenciar maiúsculas de minúsculas.
    IF LOWER(v_titulo_cargo) NOT ILIKE '%vendedor%' THEN
        RAISE EXCEPTION 'O funcionário não tem permissão para realizar vendas (cargo não é Vendedor).';
    END IF;

    -- 3. Valida o cupom, se um for utilizado.
    IF NEW.COD_CUPOM IS NOT NULL THEN
        -- Decrementa o número de usos restantes do cupom.
        -- O UPDATE retorna o número de linhas afetadas. Se for 0, o cupom não foi encontrado ou não tinha usos.
        UPDATE CUPOM
        SET USOS_RESTANTES = USOS_RESTANTES - 1
        WHERE COD_CUPOM = NEW.COD_CUPOM AND USOS_RESTANTES > 0;

        IF NOT FOUND THEN
            RAISE EXCEPTION 'Cupom inválido ou sem usos restantes.';
        END IF;
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TG_VALIDAR_VENDA
BEFORE INSERT
ON VENDA
FOR EACH ROW
EXECUTE FUNCTION VALIDAR_VENDA();

-- ADICIONAR ITEM VENDA
CREATE OR REPLACE FUNCTION VALIDAR_PREPARAR_ITEM()
RETURNS TRIGGER AS $$
DECLARE
    v_cod_loja INT;
    v_estoque_atual INT;
    v_preco_produto NUMERIC(10,2);
BEGIN
    -- Busca informações essenciais
    SELECT COD_LOJA INTO v_cod_loja FROM VENDA WHERE COD_VENDA = NEW.COD_VENDA;
    SELECT PRECO_UNIT INTO v_preco_produto FROM PRODUTO WHERE COD_PRODUTO = NEW.COD_PRODUTO;
    SELECT COALESCE(QUANTIDADE, 0) INTO v_estoque_atual FROM ESTOQUE WHERE COD_PRODUTO = NEW.COD_PRODUTO AND COD_LOJA = v_cod_loja;

    NEW.preco_unit := v_preco_produto;
    IF (TG_OP = 'INSERT') THEN
        -- Valida se há estoque suficiente para a nova inserção
        IF v_estoque_atual < NEW.QUANTIDADE THEN
            RAISE EXCEPTION 'Estoque insuficiente (disponível: %) para o produto % na loja %.', v_estoque_atual, NEW.COD_PRODUTO, v_cod_loja;
        END IF;
        -- Decrementa o estoque do produto.
        UPDATE ESTOQUE SET QUANTIDADE = QUANTIDADE - NEW.QUANTIDADE
        WHERE COD_PRODUTO = NEW.COD_PRODUTO AND COD_LOJA = v_cod_loja;
        -- Adiciona o valor do item ao valor total da venda.
        UPDATE VENDA SET VALOR_TOTAL = COALESCE(VALOR_TOTAL, 0) + (NEW.QUANTIDADE * NEW.preco_unit)
        WHERE COD_VENDA = NEW.COD_VENDA;
    ELSIF (TG_OP = 'UPDATE') THEN
        -- Valida se o estoque é suficiente para a alteração na quantidade
        IF v_estoque_atual + OLD.QUANTIDADE < NEW.QUANTIDADE THEN
             RAISE EXCEPTION 'Estoque insuficiente (disponível: %) para alterar a quantidade do produto %.', (v_estoque_atual + OLD.QUANTIDADE), NEW.COD_PRODUTO;
        END IF;
        -- Ajusta o estoque: devolve a quantidade antiga e retira a nova.
        UPDATE ESTOQUE SET QUANTIDADE = QUANTIDADE + OLD.QUANTIDADE - NEW.QUANTIDADE
        WHERE COD_PRODUTO = NEW.COD_PRODUTO AND COD_LOJA = v_cod_loja;
        -- Ajusta o valor total da venda: remove o valor antigo e adiciona o novo.
        UPDATE VENDA SET VALOR_TOTAL = VALOR_TOTAL - (OLD.QUANTIDADE * OLD.preco_unit) + (NEW.QUANTIDADE * NEW.preco_unit)
        WHERE COD_VENDA = NEW.COD_VENDA;
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TG_VALIDAR_PREPARAR_ITEM
BEFORE INSERT OR UPDATE ON ITEM
FOR EACH ROW EXECUTE FUNCTION VALIDAR_PREPARAR_ITEM();

-- VALIDAR AVALIAÇÃO
CREATE OR REPLACE FUNCTION VALIDAR_AVALIACAO()
RETURNS TRIGGER AS $$
DECLARE
    v_cod_cliente_venda INT;
BEGIN
    -- 1. Valida se a nota da avaliação está no intervalo permitido (0 a 10).
    IF NEW.NOTA < 0 OR NEW.NOTA > 10 THEN
        RAISE EXCEPTION 'A nota da avaliação deve estar entre 0 e 10.';
    END IF;

    -- Busca o código do cliente que realizou a venda a ser avaliada.
    SELECT COD_CLIENTE INTO v_cod_cliente_venda FROM VENDA WHERE COD_VENDA = NEW.COD_VENDA;

    -- 2. Valida se o cliente que está fazendo a avaliação é o mesmo que fez a compra.
    IF v_cod_cliente_venda <> NEW.COD_CLIENTE THEN
        RAISE EXCEPTION 'A avaliação só pode ser feita pelo cliente que realizou a compra.';
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TG_VALIDAR_AVALIACAO
BEFORE INSERT OR UPDATE
ON AVALIACAO
FOR EACH ROW
EXECUTE FUNCTION VALIDAR_AVALIACAO();

-- REGISTRAR MUDANÇA
CREATE OR REPLACE FUNCTION REGISTRAR_MUDANCA_SALARIO()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.SALARIO IS DISTINCT FROM OLD.SALARIO THEN
        -- Insere o registro da alteração na tabela de auditoria.
        INSERT INTO AUDITORIA_SALARIO (COD_CARGO, SALARIO_NOVO, DATA_ALTERACAO)
        VALUES (NEW.COD_CARGO, NEW.SALARIO, NOW());
    END IF;

    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE OR REPLACE TRIGGER TG_REGISTRAR_MUDANCA_SALARIO
AFTER INSERT OR UPDATE
ON CARGO
FOR EACH ROW
EXECUTE FUNCTION REGISTRAR_MUDANCA_SALARIO();