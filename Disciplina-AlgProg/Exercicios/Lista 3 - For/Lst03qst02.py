import os

from utils import text_utils, math_utils

def main():
	run_application = "y"
	text_utils.showTitle("Números pares")
	while run_application.lower() == "y":
		number = math_utils.getPositiveNumber("Digite um número: ")
		show_pairs_numbers(number)
		run_application = input("Verificar a partir de outro número? (y/n): ")
	
	os.system("cls")
def show_pairs_numbers(n_number):
	print("-" * 5, f"\nPares de 1 à {n_number}:")
	number_of_pairs = n_number // 2
	for number in range(1, number_of_pairs + 1):
		print(number * 2)

main()