def main():
    cotacao_dolar = float(input('Qual a cotação do Dolar?\n'))
    valor_dolar = float(input('Digite um valor em dólar: '))

    valor_real = cotacao_dolar * valor_dolar

    print(f'Com essa cotação do Dolar, {valor_dolar} dolares equivalem a {valor_real:,.2f} reais')

main()