import os, time
from utils.math_utils import getNumber
from utils.text_utils import showTitle

def main():
	showTitle("Progressão Aritmética")
	run_application = "y"
	
	while run_application.lower() == "y":
		initial_value = getNumber("Digite o valor inicial da progressão: ")
		max_value = getNumber("Digite o último número da progressão: ")
		common_difference = getNumber("Digite a razão da progressão: ")
		
		for number in range(initial_value, max_value+1, common_difference):
			print(number)
			time.sleep(0.2)
		
		run_application = input("Deseja analisar outra PA? (y/n): ")
		if run_application.lower() == "y":
			# se estiver usando Linux, trocar 'cls' por 'clear'
			os.system("cls")
			showTitle("Progressão Aritmética")
	
	showTitle("Fim do algoritmo")

main()