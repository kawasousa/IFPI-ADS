#6. Escreva um algoritmo para determinar o número de dígitos de um número informado.

def main():
  print('>>Identificador de número de dígitos\n ')
  contar = 'Sim'
  
  while(contar=='Sim'):
    numero = float(input('Digite um número inteiro:'))
    print(f'Número: {numero}')
    cont_digitos(numero)
    print('----------')
    contar = input('Fazer uma nova contagem?')
#Fim da main

def cont_digitos(numero):
  num_digitos = 0
  divisor = 10
  while(numero>=1):
    numero = numero/divisor
    num_digitos = num_digitos+1
  if(numero==0):
    num_digitos = 1
  print(f'Número de dígitos: {num_digitos}')
#Fim da ident_digitos

main()