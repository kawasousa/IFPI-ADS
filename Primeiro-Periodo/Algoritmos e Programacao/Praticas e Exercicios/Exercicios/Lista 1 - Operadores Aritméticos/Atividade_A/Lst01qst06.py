def main():
    velocidade_kmh = int(input('Digite a velocidade em km/h: '))

    velocidade_ms = velocidade_kmh / 3.6
    
    print(f'O equivalente de {velocidade_kmh}km/h é {velocidade_ms}m/s')

main()