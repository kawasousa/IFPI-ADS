#7. Leia um número e, a seguir,
#leia uma lista de números até achar um igual ao primeiro número lido.

def main():
  numero_base = float(input('Digite um número'))
  numero_comparado = float(input('Digite outro número'))
  
  while(numero_base != numero_comparado):
    numero_comparado = float(input('Digite outro número'))
  print('Você acertou!')

main()