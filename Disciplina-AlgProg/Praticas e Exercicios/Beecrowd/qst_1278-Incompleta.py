def main():
    numeroDeLinhas = int(input())
    texto = []
    
    while numeroDeLinhas != 0:
        linhas = []
        maiorLinha = 0

        for linha in range(numeroDeLinhas):
            linhaAtual = input()

            letraAnterior = ' '
            linhaOrganizada = ''
            for letra in linhaAtual:
                if (letraAnterior != ' ' and letra == ' ') or letra != ' ':
                    linhaOrganizada += letra
                    if(letra == ' '):
                        print('*')
                
                letraAnterior = letra
            
            if len(linhaOrganizada) > maiorLinha:
                maiorLinha = len(linhaOrganizada)
            
            linhas.append(linhaOrganizada)
        linhas.append(maiorLinha)

        texto.append(linhas)
    
        numeroDeLinhas = int(input())
    
    for estrofe in texto:
        maiorLinha = estrofe[-1]
        for linha in estrofe:

            if linha != maiorLinha:
                espacos = maiorLinha - len(linha)
                print(' ' * espacos + linha)
        if(estrofe != texto[-1]):
            print('')
main()