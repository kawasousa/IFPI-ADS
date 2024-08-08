def main():
    qtdPalavras = int(input())
    palavras = []

    for indice in range(qtdPalavras):
        palavra = input()
        codigo_1 = primeiraPassada(palavra)
        codigo_2 = segundaPassada(codigo_1)
        codigo_3 = terceiraPassada(codigo_2)
        palavras.append(codigo_3)
    
    for palavra in palavras:
        print(palavra)

def primeiraPassada(palavra):
    codigo = ""

    for letra in palavra:
        letraOrd = ord(letra)
        if letraOrd >= 65 and letraOrd <= 90 or letraOrd >= 97 and letraOrd <= 122:
            letraOrd += 3
            letraChar = chr(letraOrd)
            codigo += letraChar
        else:
            letraChar = chr(letraOrd)
            codigo += letraChar

    return codigo

def segundaPassada(palavra):
    codigo = ""

    for indice in range(len(palavra), 0, -1):
        letra = palavra[indice-1]
        codigo += letra

    return codigo

def terceiraPassada(palavra):
    codigo = ""

    for indice in range(len(palavra)):
        letra = palavra[indice]
        letraOrd = ord(letra)

        if indice >= len(palavra) // 2:
            letraOrd -= 1
            letraChar = chr(letraOrd)
            codigo += letraChar
        else:
            codigo += letra

    return codigo

main()