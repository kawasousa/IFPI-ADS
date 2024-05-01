def main():
  processo = 'S'
  investimento = float(input('Quanto você deseja investir?'))
  taxa = float(input('Qual a taxa de juros mensal do investimento? (em %)'))/100
  montante = investimento
  
  while(processo=='S'):
    mes = 1
    while(mes<12):
      montante += investimento + taxa*montante
      mes += 1
    print(f'Saldo do investimento após 1 ano: {montante:,.2f}')
    processo = input('Deseja processar mais um ano?(S/N)')
  print('Fim da análise de investimento!')

main()