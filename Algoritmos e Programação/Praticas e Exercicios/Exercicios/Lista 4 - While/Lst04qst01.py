#Leia uma lista de números e que para cada número lido, escreva o próprio número e a relação de seus divisores. (flag número = 0).

def main():
  numero = get_number('Numero:')
  while(numero > 0):
    print('----------')
    print(f'Número: {numero}')
    print('Divisores:')
    mostrar_divisores(numero)
    print('----------')
    numero = get_number('Numero:')
  print('--------')
  print('Fim...')
# Fim da main

def mostrar_divisores(number):
  divisor = 1
  contagem = 0
  while(divisor<number):
    if((number%divisor)==0):
      print(divisor)
      contagem = contagem+1
    divisor = divisor+1
    
  print('----------')
  print(f'Numero de divisores: {contagem}')
# Fim da mostrar_divisores

def get_number(numero):
  return float(input(numero))
# Fim da get_number

main()