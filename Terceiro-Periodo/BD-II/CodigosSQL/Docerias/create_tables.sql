-- LOJA
CREATE TABLE LOJA(
    COD_LOJA SERIAL PRIMARY KEY,
    NOME VARCHAR(50) NOT NULL
);
-- FORNECEDOR
CREATE TABLE FORNECEDOR(
    COD_FORNECEDOR SERIAL PRIMARY KEY,
    CNPJ VARCHAR(14) NOT NULL,
    RAZAO_SOCIAL VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL,
    NOME_FANTASIA VARCHAR(100) NOT NULL
);
-- CARGO
CREATE TABLE CARGO(
    COD_CARGO SERIAL PRIMARY KEY,
    TITULO VARCHAR(50) NOT NULL,
    SALARIO NUMERIC(10,2) NOT NULL
);
-- CUPOM
CREATE TABLE CUPOM(
    COD_CUPOM SERIAL PRIMARY KEY,
    PORCENTAGEM INT NOT NULL,
    USOS_RESTANTES INT NOT NULL,
    DATA_CRIACAO DATE NOT NULL DEFAULT NOW(),
    DESCRICAO TEXT NOT NULL
);
-- CLIENTE
CREATE TABLE CLIENTE(
    COD_CLIENTE SERIAL PRIMARY KEY,
    CPF VARCHAR(11) NOT NULL,
    NOME VARCHAR(100) NOT NULL,
    EMAIL VARCHAR(100) NOT NULL
);
-- PRODUTO
CREATE TABLE PRODUTO(
    COD_PRODUTO SERIAL PRIMARY KEY,
    NOME VARCHAR(100) NOT NULL,
    PRECO_UNIT NUMERIC(10,2) NOT NULL
);
-- FUNCIONARIO
CREATE TABLE FUNCIONARIO(
    COD_FUNCIONARIO SERIAL PRIMARY KEY,
    COD_CARGO INT NOT NULL,
    COD_LOJA INT NOT NULL,
    CPF VARCHAR(11) NOT NULL,
    NOME VARCHAR(100) NOT NULL,

    FOREIGN KEY (COD_CARGO) REFERENCES CARGO(COD_CARGO),
    FOREIGN KEY (COD_LOJA) REFERENCES LOJA(COD_LOJA)
);
-- ESTOQUE
CREATE TABLE ESTOQUE(
    COD_PRODUTO INT NOT NULL,
    COD_LOJA INT NOT NULL,
    PRIMARY KEY (COD_PRODUTO, COD_LOJA),
    QUANTIDADE INT NOT NULL
);
-- LOTE
CREATE TABLE LOTE(
    COD_LOTE SERIAL PRIMARY KEY,
    COD_FORNECEDOR INT NOT NULL,
    COD_LOJA INT NOT NULL,
    COD_PRODUTO INT NOT NULL,
    DATA_COMPRA DATE NOT NULL DEFAULT NOW(),
    QUANTIDADE INT NOT NULL,
    VALOR_COMPRA NUMERIC(10,2),

    FOREIGN KEY (COD_FORNECEDOR) REFERENCES FORNECEDOR(COD_FORNECEDOR),
    FOREIGN KEY (COD_LOJA) REFERENCES LOJA(COD_LOJA),
    FOREIGN KEY (COD_PRODUTO) REFERENCES PRODUTO(COD_PRODUTO)
);
-- VENDA
CREATE TABLE VENDA(
    COD_VENDA SERIAL PRIMARY KEY,
    COD_CLIENTE INT NOT NULL,
    COD_LOJA INT NOT NULL,
    COD_FUNCIONARIO INT NOT NULL,
    COD_CUPOM INT,
    DATA_VENDA DATE NOT NULL DEFAULT NOW(),
    VALOR_TOTAL NUMERIC(10,2),

    FOREIGN KEY (COD_CLIENTE) REFERENCES CLIENTE(COD_CLIENTE),
    FOREIGN KEY (COD_LOJA) REFERENCES LOJA(COD_LOJA),
    FOREIGN KEY (COD_FUNCIONARIO) REFERENCES FUNCIONARIO(COD_FUNCIONARIO),
    FOREIGN KEY (COD_CUPOM) REFERENCES CUPOM(COD_CUPOM) ON DELETE SET NULL
);
-- ITEM
CREATE TABLE ITEM(
    COD_VENDA INT NOT NULL,
    COD_PRODUTO INT NOT NULL,
    PRIMARY KEY (COD_VENDA, COD_PRODUTO),
    PRECO_UNIT NUMERIC(10,2),
    QUANTIDADE INT NOT NULL,

    FOREIGN KEY (COD_VENDA) REFERENCES VENDA(COD_VENDA) ON DELETE CASCADE,
    FOREIGN KEY (COD_PRODUTO) REFERENCES PRODUTO(COD_PRODUTO) ON DELETE CASCADE
);
-- AVALIACAO
CREATE TABLE AVALIACAO(
    COD_CLIENTE INT NOT NULL,
    COD_VENDA INT NOT NULL,
    NOTA INT NOT NULL,
    DATA_AVALIACAO DATE NOT NULL DEFAULT NOW(),
    COMENTARIO TEXT,

    FOREIGN KEY (COD_CLIENTE) REFERENCES CLIENTE(COD_CLIENTE) ON DELETE CASCADE,
    FOREIGN KEY (COD_VENDA) REFERENCES VENDA(COD_VENDA) ON DELETE CASCADE
);
-- AUDITORIA SALARIO
CREATE TABLE AUDITORIA_SALARIO(
    COD_AUDITORIA_SALARIO SERIAL PRIMARY KEY,
    COD_CARGO INT NOT NULL,
    SALARIO_NOVO DECIMAL(10, 2) NOT NULL,
    DATA_ALTERACAO DATE NOT NULL DEFAULT NOW(),

	FOREIGN KEY (COD_CARGO) REFERENCES CARGO(COD_CARGO)
);