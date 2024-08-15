import sys
sys.path.append(".")
from utils import getNumber, showPresentation, showResult

def main():
    showPresentation("Leia o salário de um trabalhador e escreva seu novo salário com um aumento de 25%.")

    #Entrada
    wage = getNumber("Digite o salário do colaborador: ")

    #Processamento
    newWage = wage * 1.25

    #Saída
    showResult(f"O novo salário é de {newWage}")

main()