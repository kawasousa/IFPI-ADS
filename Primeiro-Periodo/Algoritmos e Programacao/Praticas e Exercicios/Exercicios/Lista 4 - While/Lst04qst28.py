import random
def main():
  aleatorio = rand()
  palpite = float(input('Digite seu palpite'))
  tentativas = 1
  
  while(palpite != aleatorio):
    if(palpite<aleatorio):
      print('Maior!')
    else:
      print('Menor!')
    tentativas += 1
    palpite = float(input('Digite seu palpite'))
  
  print(f'Parabéns, você acertou depois de {tentativas} tentativas!')

def rand():
  return (100*random.random())//10

main()