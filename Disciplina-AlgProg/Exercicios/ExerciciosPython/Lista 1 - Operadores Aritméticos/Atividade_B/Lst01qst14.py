import sys
sys.path.append(".")
from utils import *

def main():
    showPresentation("Leia 3 notas de um aluno e o peso de cada nota, calcule e escreva a média ponderada.")
    #Entrada
    studentName = input("Qual o nome do(a) aluno(a)?\n")
    firstGrade = getNumber("Digite a primeira nota do aluno: ", True)
    firstWeight = getNumber("Digite o peso da primeira nota: ")

    secondGrade = getNumber("Digite a segunda nota do aluno: ", True)
    secondWeight = getNumber("Digite o peso da segunda nota: ")

    thirdGrade = getNumber("Digite a terceira nota do aluno: ", True)
    thirdWeight = getNumber("Digite o peso da terceira nota: ")


    #Processamento
    firstMultiply = multiply(firstGrade, firstWeight)
    secondMultiply = multiply(secondGrade, secondWeight)
    thirdMultiply = multiply(thirdGrade, thirdWeight)

    numerator = firstMultiply + secondMultiply + thirdMultiply
    denominator = firstWeight + secondWeight + thirdWeight
    weightedAverage = numerator / denominator

    #Saida
    showResult(f"A média ponderada das notas do(a) {studentName} é {weightedAverage}")

main()