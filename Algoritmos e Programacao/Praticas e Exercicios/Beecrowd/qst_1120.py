

def main():
    entrada = input()
    digito = entrada[0]
    valor = ''

    for indice in range(len(entrada)):
        numero = entrada[indice]
        if indice >= 2:
            valor += numero
    

    while digito != '0' and valor != '0':
        valorCorrigido = ''
        for numero in valor:
            if numero != digito:
                valorCorrigido += numero

        valorCorrigido = 0 if valorCorrigido == '' else valorCorrigido

        valorCorrigido = int(valorCorrigido)
        
        print(valorCorrigido)
    
        entrada = input()
        digito = entrada[0]
        valor = ''

        for indice in range(len(entrada)):
            numero = entrada[indice]
            if indice >= 2:
                valor += numero

main()