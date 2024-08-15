def main():
    minutos_totais = int(input('Digite o número total de minutos: '))

    horas = minutos_totais // 60
    minutos = minutos_totais - horas*60

    print(f'{minutos_totais} minutos equivalem a {horas} horas e {minutos} minutos')

main()