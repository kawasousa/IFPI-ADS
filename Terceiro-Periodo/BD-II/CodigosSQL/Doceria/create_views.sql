-- CUPONS VÁLIDOS
CREATE OR REPLACE VIEW CUPONS_VALIDOS
AS
SELECT * FROM CUPOM WHERE USOS_RESTANTES <> 0;

-- PRODUTOS SEM ESTOQUE
CREATE OR REPLACE VIEW PRODUTO_SEM_ESTOQUE
AS
SELECT * FROM PRODUTO WHERE ESTOQUE = 0;