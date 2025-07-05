-- FUNÇÃO GENÉRICA DE CADASTRO
CREATE OR REPLACE FUNCTION CADASTRAR(TABELA TEXT, DADOS JSONB)
RETURNS VOID AS $$
DECLARE
    COLUNAS TEXT;
    VALORES TEXT;
    CHAMADA TEXT;
BEGIN
    SELECT string_agg(quote_ident(key), ', ')
    INTO COLUNAS
    FROM jsonb_object_keys(DADOS) AS key;

    SELECT string_agg(quote_literal(value), ', ')
    INTO VALORES
    FROM jsonb_each_text(DADOS) AS item;

    CHAMADA := format('INSERT INTO %I (%s) VALUES (%s)', TABELA, COLUNAS, VALORES);

    RAISE NOTICE 'Executando: %', CHAMADA;
    EXECUTE CHAMADA;
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Erro original (SQLSTATE: %): %', SQLSTATE, SQLERRM;
        RAISE EXCEPTION 'Falha ao cadastrar em %: %', TABELA, SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- FUNÇÃO GENÉRICA DE ALTERAÇÃO
CREATE OR REPLACE FUNCTION ALTERAR(TABELA TEXT, DADOS JSONB, CONDICAO JSONB)
RETURNS VOID AS $$
DECLARE
    CLAUSULA_SET TEXT;
    CLAUSULA_WHERE TEXT;
    CHAMADA TEXT;
BEGIN
    SELECT string_agg(format('%I = %L', key, value), ', ')
    INTO CLAUSULA_SET
    FROM jsonb_each_text(DADOS);

    SELECT string_agg(format('%I = %L', key, value), ' AND ')
    INTO CLAUSULA_WHERE
    FROM jsonb_each_text(CONDICAO);

    IF CLAUSULA_SET IS NULL OR CLAUSULA_WHERE IS NULL THEN
        RAISE EXCEPTION 'Os dados para alteração e a condição não podem ser vazios.';
    END IF;

    CHAMADA := format('UPDATE %I SET %s WHERE %s', TABELA, CLAUSULA_SET, CLAUSULA_WHERE);

    RAISE NOTICE 'Executando: %', CHAMADA;
    EXECUTE CHAMADA;
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Erro original (SQLSTATE: %): %', SQLSTATE, SQLERRM;
        RAISE EXCEPTION 'Falha ao alterar em %: %', TABELA, SQLERRM;
END;
$$ LANGUAGE plpgsql;

-- FUNÇÃO GENÉRICA DE REMOÇÃO
CREATE OR REPLACE FUNCTION REMOVER(TABELA TEXT, CONDICAO JSONB)
RETURNS VOID AS $$
DECLARE
    CLAUSULA_WHERE TEXT;
    CHAMADA TEXT;
BEGIN
    SELECT string_agg(format('%I = %L', key, value), ' AND ')
    INTO CLAUSULA_WHERE
    FROM jsonb_each_text(CONDICAO);

    IF CLAUSULA_WHERE IS NULL THEN
        RAISE EXCEPTION 'A condição para remoção não pode ser vazia.';
    END IF;

    CHAMADA := format('DELETE FROM %I WHERE %s', TABELA, CLAUSULA_WHERE);

    RAISE NOTICE 'Executando: %', CHAMADA;
    EXECUTE CHAMADA;
EXCEPTION
    WHEN OTHERS THEN
        RAISE NOTICE 'Erro original (SQLSTATE: %): %', SQLSTATE, SQLERRM;
        RAISE EXCEPTION 'Falha ao remover de %: %', TABELA, SQLERRM;
END;
$$ LANGUAGE plpgsql;