def main():
  fator_1 = float(input('Digite o primerio fator da multiplicação:'))
  fator_2 = float(input('Digite o segundo fator da multiplicação:'))
  contador = 1
  produto = fator_1
  
  while(contador<fator_2):
    produto += fator_1
    contador += 1
  print(f'Resultado: {produto}')

main()