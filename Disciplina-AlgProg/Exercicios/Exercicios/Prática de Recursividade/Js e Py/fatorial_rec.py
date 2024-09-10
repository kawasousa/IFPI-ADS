import os, math, random

def getOption():
    os.system("cls")

    print("""
[1] - Fatorial
[2] - Fibonacci
[3] - Sequencia
[4] - Multiplicacao
[5] - Exponenciacao
[6] - Somatorio do Vetor Aleatorio
[7] - Contador de Letras

[0] - Sair
""")
    
    return int(input("Digite o numero da opcao: "))

def fatorial(numero, inicial, resultado = 1):
    if numero > 0:
        resultado *= numero
        fatorial(numero-1, inicial, resultado)
    else:
        print(f"O fatorial de {inicial} e {resultado}.")

def fibonacci(tamanho, resultado = [1,1], indice = 2):
    if indice < tamanho:
        resultado.append(resultado[-2]+resultado[-1])
        fibonacci(tamanho, resultado, indice+1)
    else:
        print(resultado)

def sequencia(minimo, maximo, atual):
    if atual <= maximo:
        print(f"-> {atual}")
        sequencia(minimo, maximo, atual+1)

def multiplicar(fator1, fator2, resultado = 0, indice = 0):
    if indice < fator2:
        resultado += fator1
        multiplicar(fator1, fator2, resultado, indice+1)
    else:
        print(f"Resultado: {resultado}")

def exponenciar(base, expoente, resultado = 1, indice = 0):
    if indice < expoente:
        resultado *= base
        exponenciar(base, expoente, resultado, indice+1)
    else:
        print(f"Resultado: {resultado}")

def VetorAleatorio(minimo, maximo, tamanho, vetor = [], indice = 0):
    if indice < tamanho:
        numero = random.randint(minimo, maximo)
        vetor.append(numero)

        VetorAleatorio(minimo, maximo, tamanho, vetor, indice+1)
    else:
        print(vetor)
        soma = somatorio(vetor, tamanho)
        print(f"O somatorio dos valores do vetor e {soma}")

def somatorio(vetor, tamanho, indice = 0, soma = 0):
    if indice < tamanho:
        numero = vetor[indice]
        soma += numero
        somatorio(vetor, tamanho, indice+1, soma)
    else:
        return soma


def contarLetras(frase, indice = 0, vogais = 0, consoantes = 0):
    if indice < len(frase):
        letra = frase[indice].upper()
        ordLetra = ord(letra)
        if ordLetra >= 65 or ordLetra <= 90:
            if ordLetra == 65 or ordLetra == 69 or ordLetra == 73 or ordLetra == 79 or ordLetra == 85:
                vogais += 1
            else:
                consoantes += 1

        contarLetras(frase, indice+1, vogais, consoantes)
    else:
        print(f"Vogais: {vogais}; Consoantes: {consoantes}.")


def main(option):
    if option != 0:
        if option == 1:
            numero = int(input("Digite o numero: "))
            fatorial(numero, numero)
        elif option == 2:
            tamanho = int(input("Digite o tamanho da sequencia: "))
            fibonacci(tamanho)
        elif option == 3:
            min = int(input("Digite o valor inicial da sequencia: "))
            max = int(input("Digite o valor final da sequencia: "))

            sequencia(min, max, min)
        elif option == 4:
            fator1 = int(input("Digite o primeiro fator: "))
            fator2 = int(input("Digite o segundo fator: "))
            
            multiplicar(fator1, fator2)
        elif option == 5:
            base = int(input("Digite o valor da base: "))
            expoente = int(input("Digite o valor do expoente: "))

            exponenciar(base, expoente)
        elif option == 6:
            minimo = int(input("Digite o valor minimo: "))
            maximo = int(input("Digite o valor maximo: "))
            tamanho = int(input("Digite o tamanho do vetor: "))

            VetorAleatorio(minimo, maximo, tamanho)
        elif option == 7:
            frase = input("Digite a frase: ")

            contarLetras(frase)
        
        input()
        option = getOption()
        main(option)


main(getOption())