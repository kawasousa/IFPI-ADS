def main():
    casos = int(input())
    saidas = []

    for indice in range(casos):
        entrada = input()

        codigo = ''
        ultimoCaractere = ' '
        for caractere in entrada:

            if ultimoCaractere == ' ' and caractere != ' ':
                codigo += caractere

            ultimoCaractere = caractere
        
        saidas.append(codigo)

    
    for saida in saidas:
        print(saida)

main()