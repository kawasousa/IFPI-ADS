from utils.math_utils import getNumber

def main():
  number_amount = getNumber('Digite um número: ')
  number_summation = calculate_summation(number_amount)
  medium = number_summation / number_amount
  print(medium)

def calculate_summation(number_amount):
  print('-------')
  summation = 0
  for i in range(number_amount):
    current_number = getNumber('Digite um número: ')
    summation += current_number
  return summation

main()