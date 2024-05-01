def main():
  produto = input('Insira o nome do produto:')
  while(produto != 'FIM'):
    preco = float(input('Insira o preço da unidade desse produto:'))
    quantidade = float(input('Insira a quantidade comprada desse produto:'))
    valor_pago = calc_valor_pago(quantidade, preco)
    print(f'Valor pago na compra: {valor_pago}.')
    print('---------')
    produto = input('Insira o nome do produto:')
  print('Fim das compras!')

def calc_valor_pago(quantidade, preco):
  valor = preco*quantidade
  if(quantidade > 10 and quantidade <= 20):
    valor = 0.9*valor
  else:
    if(quantidade <= 50):
      valor = 0.8*valor
    else:
      if(quantidade > 50):
        valor = 0.75*valor
  return valor

main()