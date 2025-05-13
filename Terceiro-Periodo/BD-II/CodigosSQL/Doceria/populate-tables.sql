
-- 1) CLIENTES
INSERT INTO CLIENTE (NOME) VALUES
  ('Ana Silva'),       -- COD_CLIENTE = 1
  ('Bruno Costa');     -- COD_CLIENTE = 2

-- 2) FUNCIONÁRIOS
INSERT INTO FUNCIONARIO (NOME) VALUES
  ('Carla Souza'),     -- COD_FUNC = 1
  ('David Pereira');   -- COD_FUNC = 2

-- 3) CUPONS
INSERT INTO CUPOM (DESCONTO, USOS_RESTANTES, DESCRICAO) VALUES
  (0,   10, 'Sem desconto'),                    -- desconto mínimo, usos disponíveis
  (50,   5, 'Metade do valor'),                 -- desconto médio
  (100,  0, 'Desconto total expirado');         -- desconto máximo, mas sem usos restantes

-- 4) CATEGORIAS
INSERT INTO CATEGORIA (NOME) VALUES
  ('Bolos'),   -- COD_CAT = 1
  ('Doces'),   -- COD_CAT = 2
  ('Bebidas'); -- COD_CAT = 3

-- 5) FORNECEDORES
INSERT INTO FORNECEDOR (CNPJ) VALUES
  ('12.345.678/0001-90'),  -- COD_FORNECEDOR = 1
  ('98.765.432/0001-10');  -- COD_FORNECEDOR = 2

-- 6) PRODUTOS
--   campo ESTOQUE deve ser > 0
INSERT INTO PRODUTO (COD_FORNECEDOR, COD_CAT, NOME, PRECO_UNIT, ESTOQUE) VALUES
  (1, 1, 'Bolo de Chocolate', 20.00,  10),  -- COD_PRODUTO = 1
  (1, 2, 'Brigadeiro',         2.50, 100),  -- COD_PRODUTO = 2
  (2, 3, 'Suco Natural',       5.00,  50),  -- COD_PRODUTO = 3
  (2, 1, 'Bolo de Cenoura',   18.00,   5);  -- COD_PRODUTO = 4

-- 7) PEDIDOS
-- 7.1) Pedido sem cupom
--     VALOR_TOTAL = 2×Brigadeiro (2×2.50) + 1×Suco (1×5.00) = 10.00
INSERT INTO PEDIDO (COD_CLIENTE, COD_FUNC, COD_CUPOM, VALOR_TOTAL, VALOR_FINAL) VALUES
  (1, 1, NULL, 10.00, 10.00);  -- COD_PEDIDO = 1

-- 7.2) Pedido com cupom de 50% (USOS_RESTANTES será decrementado pelo sistema ao usar)
--     VALOR_TOTAL = 1×Bolo de Chocolate (20.00) + 3×Brigadeiro (3×2.50 = 7.50) = 27.50
--     VALOR_FINAL = 27.50 × (1 – 0.50) = 13.75
INSERT INTO PEDIDO (COD_CLIENTE, COD_FUNC, COD_CUPOM, VALOR_TOTAL, VALOR_FINAL) VALUES
  (2, 2, 2, 27.50, 13.75);     -- COD_PEDIDO = 2

-- 8) ITENS de cada pedido (QUANTIDADE > 0)
-- Itens do pedido 1
INSERT INTO ITEM (COD_PEDIDO, COD_PRODUTO, QUANTIDADE) VALUES
  (1, 2, 2),  -- 2×Brigadeiro
  (1, 3, 1);  -- 1×Suco Natural

-- Itens do pedido 2
INSERT INTO ITEM (COD_PEDIDO, COD_PRODUTO, QUANTIDADE) VALUES
  (2, 1, 1),  -- 1×Bolo de Chocolate
  (2, 2, 3);  -- 3×Brigadeiro

-- 9) AVALIAÇÕES
-- 9.1) Avaliação com nota máxima e comentário
INSERT INTO AVALIACAO (COD_PEDIDO, COD_CLIENTE, NOTA, COMENTARIO) VALUES
  (1, 1, 10, 'Excelente atendimento e produtos fresquinhos!');

-- 9.2) Avaliação com nota mínima e sem comentário (COMENTARIO fica NULL)
INSERT INTO AVALIACAO (COD_PEDIDO, COD_CLIENTE, NOTA) VALUES
  (2, 2, 0);