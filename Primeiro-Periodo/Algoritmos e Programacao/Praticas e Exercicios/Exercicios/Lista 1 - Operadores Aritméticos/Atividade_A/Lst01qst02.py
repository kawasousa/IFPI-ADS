def main():
    horas = int(input('Digite o número de horas: '))
    minutos = int(input('Digite o número de minutos: '))

    horas_em_minutos = horas * 60
    minutos_totais = horas_em_minutos + minutos

    print(f'A quantidade total de minutos é: {minutos_totais}')

main()