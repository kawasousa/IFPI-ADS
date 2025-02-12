def main():
    numero = int(input('Digite um número natural de três dígitos: '))

    centena = numero // 100
    dezena = (numero - (centena*100)) // 10
    unidade = numero - (centena*100) - (dezena*10)
    
    print('Centena:', centena)
    print('Dezena: ', dezena)
    print('Unidade:', unidade)

main()