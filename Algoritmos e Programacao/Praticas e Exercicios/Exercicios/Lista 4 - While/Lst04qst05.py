#5. Leia dois números X e N.
#A seguir, escreva o resultado das divisões de X por N, onde,
#após cada divisão, X passa a ter como conteúdo o resultado da divisão anterior
#e N é decrementado de 1 em 1, até chegar a 2.

def main():
  number_X = get_number()
  number_N = get_number()
  print('--------------\nDivisões:\n ')
  divisoes(number_X, number_N)
#Fim da main

def divisoes(number_x, number_n):
  while(number_n>=2):
    print(f'Resultado de {number_x:,.2f} divido por {number_n:,.2f}: {(number_x/number_n):,.2f}')
    number_x = number_x/number_n
    number_n = number_n-1
#Fim da divisoes

def get_number():
  return float(input('Digite um número:'))
#Fim da 

main()