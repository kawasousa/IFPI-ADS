#4. Leia um número e divida-o por dois (sucessivamente)
#até que o resultado seja menor que 1.
#Escreva o resultado da última divisão efetuada.

def main():
  numero = float(input('Digite um número:'))
  print('-------------\nDivisões:')
  divisoes(numero)
#Fim da main

def divisoes(numero):
  while(numero>1):
    numero = numero/2
    print(numero)

main()