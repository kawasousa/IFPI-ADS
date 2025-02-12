def main():
    casos = int(input())
    numeroLeds = {'1':2, '2':5, '3':5, '4':4, '5':5, '6':6, '7':4, '8':7, '9':6, '0':6}
    resultados = []

    for indice in range(casos):
        numero = input()
        leds = 0
        for digito in numero:
            leds += numeroLeds[digito]

        resultados.append(leds)

    for resultado in resultados:
        print(resultado, 'leds')
main()