# Fluxo
Um *fornecedor* fornece um *produto* de uma *categoria* para uma *loja*, incrementando seu *estoque*;
Um *cliente* faz seu cadastro, indicando seu *endereço*;
Um *cliente* faz um *pedido* para uma *loja*, escolhendo os *produtos* que quer comprar; 
# Entidades
## Loja

## Fornecedor
- CNPJ
- Nome Fantasia
- Razão Social
- Telefone
- E-mail
## Cargo
- Título
- Salário
## Categoria
- Nome
- Descrição
## Cupom
- Usos restantes
- Descrição
- Porcentagem de desconto
---
## Produto
- Categoria
- Nome
- Preço Unitário
## Estoque
- Produto
- Loja
- Quantidade
## Cliente
- Nome
## Funcionário
- Loja
- Nome
## Pedido
- Loja
- Cliente
## Item
- Pedido
- Produto
- Quantidade
## Avaliação
- Cliente
- Pedido
- Nota
- Comentário
# Views
- Cupons válidos
- Avaliações por loja
# Relações
Loja 1..N Estoque
Estoque N..1 Produto

Funcionário N..1 Cargo

Pedido 1..N Item
Pedido 1..N Avaliação
Pedido N..1 Loja
Pedido N..1 Cliente
Pedido N..1 Funcionário

Item 1..1 Produto
# Triggers
## Incrementar estoque de produto
- Quando: Insert
- Tabela: 
- Onde: 

## Decrementar estoque de produto
- Quando: 
- Tabela: Item
- Onde: 

## Aplicar cupom
- Quando:
- Tabela:
- Onde: 

## Validar avaliação
- Quando:
- Tabela:
- Onde: 