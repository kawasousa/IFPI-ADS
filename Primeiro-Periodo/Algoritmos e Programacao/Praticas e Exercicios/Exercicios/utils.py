from time import sleep
import os
import sys

def getNumber(message: str = "Digite um número: ", isFloat = False):
    if isFloat == True:
        return float(input(message))
    else:
        return int(input(message))

def showTitle(questionTitle: str = "Questão de Algoritmos"):
    text = ""
    cleanScreen()
    for letter in questionTitle:
        print(text)
        text += letter
        sleep(0.005)
        cleanScreen()
    print(text)
    sleep(2)
    cleanScreen()

def cleanScreen(time: float = 0.0):
    sleep(time)
    if os.name == "nt":
        os.system("cls")
    else:
        os.system("clear")


def showResult(result: str):
    lineLength = int(len(result) * 1.5)
    spaceLength = int(len(result) * 0.25)
    print(lineLength * "-")
    print(spaceLength * " ", result)
    print(lineLength * "-")

def sum(firstNumber: float, secondNumber: float):
    return firstNumber + secondNumber

def multiply(firstNumber, secondNumber):
    return firstNumber * secondNumber