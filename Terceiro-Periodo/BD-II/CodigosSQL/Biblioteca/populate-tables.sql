--- POPULATE TABLES
INSERT INTO TITULO (NOME, DESCRICAO) VALUES
('O Senhor dos Anéis', 'Fantasia épica'),
('1984', 'Distopia totalitária'),
('A Revolução dos Bichos', 'Fábula política'),
('Dom Quixote', 'Romance clássico'),
('Harry Potter e a Pedra Filosofal', 'Fantasia juvenil');

INSERT INTO LIVRO (COD_TITULO, VALOR, ESTOQUE) VALUES
(1, 100, 50),
(2, 50, 30),
(3, 40, 20),
(4, 80, 15),
(5, 90, 25);

INSERT INTO FORNECEDOR (NOME, FONE) VALUES
('Editora A', '1234-5678'),
('Editora B', '2345-6789'),
('Editora C', '3456-7890'),
('Editora D', '4567-8901'),
('Editora E', '5678-9012');

INSERT INTO PEDIDO (COD_FORNECEDOR, HORA, DATA_PEDIDO, VALOR_TOTAL) VALUES
(1, '10:30:00', '2025-04-01', 500),
(2, '11:00:00', '2025-04-02', 300),
(3, '14:45:00', '2025-04-03', 200),
(4, '09:15:00', '2025-04-04', 400),
(5, '16:00:00', '2025-04-05', 600);

INSERT INTO ITEM_PEDIDO (COD_PEDIDO, COD_LIVRO) VALUES
(1, 1),
(1, 2),
(2, 3),
(3, 4),
(4, 5);