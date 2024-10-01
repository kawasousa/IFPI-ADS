from sys import path
path.append(".")
from utils import getNumber, showTitle, cleanScreen

#Returns the cashback value
def getCashbackValue(value: float) -> float:
    if value <= 250.0:
        return value * 0.05
    elif value <= 500.0:
        return value * 0.07
    elif value < 750.0:
        return value * 0.08
    else:
        cashback = 0.08
        exceededValue = value - 750
        exceededCashback = 0.25 * exceededValue
        return cashback + exceededCashback

#Returns the cashback value
def getCashbackPercent(value: float) -> float:
    if value <= 250.0:
        return 0.05
    elif value <= 500.0:
        return 0.07
    elif value < 750.0:
        return 0.08
    else:
        return 0.33

#Recieves the user inputs and show results
def main():
    showTitle("APISC02 - Cashback")
    #Inputs (Entradas)
    purchaseValue: float = getNumber("Digite o valor da compra: ", True)
    clientName: str = input("Digite o nome do cliente: ")

    #Processing (Processamento)
    lowerCashbackValue: float = getCashbackValue(purchaseValue)
    lowerCashbackClient: str = clientName

    higherCashbackValue: float = getCashbackValue(purchaseValue)
    higherCashbackClient: str = clientName

    totalRevenue = 0
    totalCashbackValue = 0
    totalCashbackPercent = 0

    while purchaseValue > 0.0:
        totalRevenue += purchaseValue
        cashbackValue: float = getCashbackValue(purchaseValue)
        cashbackPercent: int = getCashbackPercent(purchaseValue)

        #Update lower cashback
        if cashbackValue < lowerCashbackValue:
            lowerCashbackValue = cashbackValue
            lowerCashbackClient = clientName

        #Update higher cashback
        if cashbackValue > higherCashbackValue:
            higherCashbackValue = cashbackValue
            higherCashbackClient = clientName
        
        totalCashbackValue += cashbackValue
        totalCashbackPercent += cashbackPercent
        
        purchaseValue = getNumber("Digite o valor da compra: ", True)
        clientName: str = input("Digite o nome do cliente: ")
    
    #Outputs (Saídas)
    cleanScreen()
    print("receita total: ", totalRevenue)
    print("Soma dos cashbacks(R$): ", totalCashbackValue)
    print("Soma dos cashbacks(%): ", totalCashbackPercent)
    print("Menor comprador: ", lowerCashbackClient, f"({lowerCashbackValue})")
    print("maior comprador: ", higherCashbackClient, f"({higherCashbackValue})")


main()