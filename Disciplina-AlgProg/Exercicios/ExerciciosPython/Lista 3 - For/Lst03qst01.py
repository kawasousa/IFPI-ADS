from utils.math_utils import getNumber

def main():
  n_number = getNumber('Digite um número inteiro: ')
  show_number_sequence(n_number)

def show_number_sequence(number):
  print(f'-------\nNúmeros de 1 a {number}:\n')
  for item in range(1, number+1):
    print(item)
  print('-------')

main()