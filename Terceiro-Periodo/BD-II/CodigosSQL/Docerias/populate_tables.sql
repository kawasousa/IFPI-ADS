-- LIMPANDO TABELAS (PARA EXECUTAR TESTES VÁRIAS VEZES)
TRUNCATE TABLE AVALIACAO, ITEM, VENDA, LOTE, ESTOQUE, FUNCIONARIO, PRODUTO, CARGO, FORNECEDOR, LOJA, CUPOM, CLIENTE, AUDITORIA_SALARIO RESTART IDENTITY CASCADE;

-- INSERTS BÁSICOS
-- Clientes
SELECT CADASTRAR('cliente', '{"cpf": "11122233344", "nome": "Juliana Pereira", "email": "juliana.p@email.com"}');
SELECT CADASTRAR('cliente', '{"cpf": "55566677788", "nome": "Ricardo Alves", "email": "ricardo.a@email.com"}');
SELECT CADASTRAR('cliente', '{"cpf": "99988877766", "nome": "Beatriz Costa", "email": "beatriz.c@email.com"}');

-- Cupons
SELECT CADASTRAR('cupom', '{"porcentagem": 10, "usos_restantes": 200, "descricao": "10% OFF"}');
SELECT CADASTRAR('cupom', '{"porcentagem": 15, "usos_restantes": 100, "descricao": "15% para clientes novos"}');
SELECT CADASTRAR('cupom', '{"porcentagem": 25, "usos_restantes": 1, "descricao": "25% OFF Queima de Estoque"}');

-- Lojas
SELECT CADASTRAR('loja', '{"nome": "Doce Sabor - Centro"}');        -- Loja 1
SELECT CADASTRAR('loja', '{"nome": "Doce Sabor - Shopping"}');     -- Loja 2
SELECT CADASTRAR('loja', '{"nome": "Doce Sabor - Bairro Sul"}');    -- Loja 3

-- Cargos e Funcionários
SELECT CADASTRAR('cargo', '{"titulo": "Vendedor", "salario": 1850.00}'); -- Cargo 1
SELECT CADASTRAR('cargo', '{"titulo": "Gerente", "salario": 3600.50}');  -- Cargo 2
SELECT CADASTRAR('cargo', '{"titulo": "Estoquista", "salario": 1700.00}');-- Cargo 3
SELECT CADASTRAR('funcionario', '{"cod_cargo": 1, "cod_loja": 1, "cpf": "12345678901", "nome": "Fernando Vendedor Centro"}');
SELECT CADASTRAR('funcionario', '{"cod_cargo": 1, "cod_loja": 2, "cpf": "23456789012", "nome": "Gabriela Vendedora Shopping"}');
SELECT CADASTRAR('funcionario', '{"cod_cargo": 2, "cod_loja": 1, "cpf": "34567890123", "nome": "Heitor Gerente"}');

-- Produtos
SELECT CADASTRAR('produto', '{"nome": "Brigadeiro Belga", "preco_unit": 4.50}');                  -- Prod 1
SELECT CADASTRAR('produto', '{"nome": "Fatia de Torta Holandesa", "preco_unit": 12.00}');         -- Prod 2
SELECT CADASTRAR('produto', '{"nome": "Caixa de Macarons Sortidos", "preco_unit": 30.00}'); -- Prod 3
SELECT CADASTRAR('produto', '{"nome": "Pão de Mel Recheado", "preco_unit": 8.00}');              -- Prod 4 (para teste de estoque lento)

-- Fornecedores e Lotes (Estoque)
SELECT CADASTRAR('fornecedor', '{"cnpj": "11222333000144", "razao_social": "Cacau & Cia Ltda", "email": "contato@cacaucia.com", "nome_fantasia": "Cacau & Cia"}');
SELECT CADASTRAR('fornecedor', '{"cnpj": "55666777000188", "razao_social": "Doces Sonhos S.A.", "email": "vendas@docessonhos.com", "nome_fantasia": "Doces Sonhos"}');
-- Trigger 'TG_ADICIONAR_NOVO_LOTE' irá popular o estoque
SELECT CADASTRAR('lote', '{"cod_fornecedor": 1, "cod_loja": 1, "cod_produto": 1, "quantidade": 200, "valor_compra": 200.00, "data_compra": "2025-06-01"}');
SELECT CADASTRAR('lote', '{"cod_fornecedor": 1, "cod_loja": 1, "cod_produto": 2, "quantidade": 50, "valor_compra": 350.00, "data_compra": "2025-06-01"}');
SELECT CADASTRAR('lote', '{"cod_fornecedor": 2, "cod_loja": 2, "cod_produto": 3, "quantidade": 100, "valor_compra": 1500.00, "data_compra": "2025-06-02"}');
SELECT CADASTRAR('lote', '{"cod_fornecedor": 2, "cod_loja": 1, "cod_produto": 3, "quantidade": 20, "valor_compra": 300.00, "data_compra": "2025-06-02"}');
SELECT CADASTRAR('lote', '{"cod_fornecedor": 2, "cod_loja": 1, "cod_produto": 4, "quantidade": 10, "valor_compra": 40.00, "data_compra": "2025-01-01"}'); -- Estoque baixo e antigo

-- VENDAS E ITENS (CORRIGIDOS E EXPANDIDOS)
-- Trigger 'TG_VALIDAR_VENDA' e 'TG_VALIDAR_PREPARAR_ITEM' serão acionados
-- Venda 1: Juliana na Loja Centro (com cupom)
SELECT CADASTRAR('venda', '{"cod_cliente": 1, "cod_loja": 1, "cod_funcionario": 1, "cod_cupom": 1, "data_venda": "2025-06-10"}');
SELECT CADASTRAR('item', '{"cod_venda": 1, "cod_produto": 1, "quantidade": 6}'); -- 6 * 4.50 = 27.00
SELECT CADASTRAR('item', '{"cod_venda": 1, "cod_produto": 2, "quantidade": 1}'); -- 1 * 12.00 = 12.00
-- Total: 39.00. Com cupom 10%: 35.10 (Valor final calculado pelo trigger do item)

-- Venda 2: Ricardo na Loja Shopping (sem cupom)
SELECT CADASTRAR('venda', '{"cod_cliente": 2, "cod_loja": 2, "cod_funcionario": 2, "data_venda": "2025-06-15"}');
SELECT CADASTRAR('item', '{"cod_venda": 2, "cod_produto": 3, "quantidade": 2}'); -- 2 * 30.00 = 60.00

-- Venda 3: Juliana na Loja Shopping (compra grande com cupom)
SELECT CADASTRAR('venda', '{"cod_cliente": 1, "cod_loja": 2, "cod_funcionario": 2, "cod_cupom": 2, "data_venda": "2025-06-25"}');
SELECT CADASTRAR('item', '{"cod_venda": 3, "cod_produto": 3, "quantidade": 5}'); -- 5 * 30.00 = 150.00
-- Total: 150.00. Com cupom 15%: 127.50

-- Venda 4: Beatriz na Loja Centro (compra pequena, sem cupom)
SELECT CADASTRAR('venda', '{"cod_cliente": 3, "cod_loja": 1, "cod_funcionario": 1, "data_venda": "2025-07-01"}');
SELECT CADASTRAR('item', '{"cod_venda": 4, "cod_produto": 1, "quantidade": 2}'); -- 2 * 4.50 = 9.00

-- AVALIAÇÕES
SELECT CADASTRAR('avaliacao', '{"cod_cliente": 1, "cod_venda": 1, "nota": 9, "comentario": "Atendimento ótimo e doces deliciosos!"}');
SELECT CADASTRAR('avaliacao', '{"cod_cliente": 2, "cod_venda": 2, "nota": 8, "comentario": "Os macarons são muito bons, mas o preço é elevado."}');
SELECT CADASTRAR('avaliacao', '{"cod_cliente": 1, "cod_venda": 3, "nota": 10, "comentario": "A vendedora Gabriela foi muito atenciosa!"}');