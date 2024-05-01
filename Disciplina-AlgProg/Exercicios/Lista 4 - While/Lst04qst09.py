def main():
  num_prova = get_number('Insira o número da prova:')
  qtd_nadadores = get_number('Insira a quantidade de nadadores:')
  
  while(num_prova!=0 and qtd_nadadores!=0):
    classificador(qtd_nadadores)
    print('---------')
    num_prova = get_number('Insira o número da prova:')
    qtd_nadadores = get_number('Insira a quantidade de nadadores:')
#Fim da main

def classificador(qtd):
  pontos_a= 0
  pontos_b = 0
  vencedor = ''
  while(qtd>0):
    nome = input('Insira o nome do nadador:')
    classificacao = get_number(f'Insira a classificação do nadador {nome}')
    clube = input('Insira o clube do nadador')
    if(classificacao==1):
      if(clube=='a'):
        pontos_a += 9
      else:
        pontos_b += 9
    if(classificacao==2):
        if(clube=='a'):
          pontos_a += 6
        else:
          pontos_b += 6
    if(classificacao==3):
        if(clube=='a'):
          pontos_a += 4
        else:
          pontos_b += 4
    if(classificacao==4):
        if(clube=='a'):
          pontos_a += 3
        else:
          pontos_b += 3
    qtd -= 1
  if(pontos_a>pontos_b):
    vencedor = 'Clube a'
  else:
    vencedor = 'Clube b'
  print(f'Pontos do Clube a: {pontos_a}')
  print(f'Pontos do Clube b: {pontos_b}')
  print(f'Vencedor: {vencedor}')

#Fim de classificador

def get_number(number):
  return float(input(number))

main()