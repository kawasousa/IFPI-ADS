from utils.math_utils import getNumber

def main():
  number = getNumber('Digite um número: ')
  number_factorial = calculate_factorial(number)
  print(f'Fatorial do número {number}:')
  print(number_factorial)
  
def calculate_factorial(max_number):
  factorial = max_number
  for number in range(max_number, 1, -1):
    factorial *= number - 1
  return factorial

main()