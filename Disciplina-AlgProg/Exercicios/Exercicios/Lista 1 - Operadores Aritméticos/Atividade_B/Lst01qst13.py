import sys
sys.path.append(".")
from utils import *

def main():
    showPresentation("Leia um valor em real (R$), calcule e escreva 70% deste valor.")
    #Entrada
    value = getNumber("Digite um valor em reais: ")

    #Processamento
    newValue = value * 0.7

    #Saída
    showResult(f"70% de {value} são {newValue}")

main()