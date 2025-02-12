from utils.math_utils import getNumber

def main():
  number = getNumber('Digite um número:')
  summation = calculate_summation(number)
  print('-------')
  print(f'Soma dos números de 1 a {number}:')
  print(f'= {summation}')

def calculate_summation(max_number):
  summation = 0
  for number in range(1, max_number+1):
    summation += number
  return summation

main()