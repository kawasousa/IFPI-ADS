def main():
    numeroDeLinhas = int(input())
    
    while numeroDeLinhas != 0:
        maiorLinha = 0
        linhas = []

        for linha in range(numeroDeLinhas):
            linhaAtual = input()


            letraAnterior = ' '
            linhaOrganizada = ''
            for letra in linhaAtual:
                if (letraAnterior != ' ' and letra == ' ') or letra != ' ':
                    linhaOrganizada += letra
                
                letraAnterior = letra
            
            if len(linhaOrganizada) > maiorLinha:
                maiorLinha = len(linhaOrganizada)
            
            linhas.append(linhaOrganizada)
        


        for linha in linhas:
            espacos = maiorLinha - len(linha)
            print(' ' * espacos, linha)
        
        numeroDeLinhas = int(input())
    


main()