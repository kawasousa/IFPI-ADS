def main():
    numero_1 = float(input('Digite o primeiro número: '))
    numero_2 = float(input('Digite o segundo número: '))

    quociente = numero_1 / numero_2
    resto = numero_1 % numero_2

    print(f'Quociente: {quociente:,.2f}')
    print(f'Resto:     {resto:,.2f}')

main()