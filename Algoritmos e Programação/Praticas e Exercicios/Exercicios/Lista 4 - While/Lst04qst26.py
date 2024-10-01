def main():
  idade = int(input('Digite a idade do espectador:'))
  soma_idade_otimo = 0
  qtd_aval_otimo = 0
  qtd_aval_regular = 0
  qtd_aval_bom = 0
  qtd_entrevistados = 0
  
  while(idade != -1):
    opiniao = int(input('Digite a opinião do espectador:'))
    
    if(opiniao == 1):
      soma_idade_otimo += idade
      qtd_aval_otimo += 1
    
    if(opiniao == 3):
      qtd_aval_regular += 1
    
    if(opiniao == 2):
      qtd_aval_bom += 1
    
    qtd_entrevistados += 1
    idade = int(input('Digite a idade do espectador:'))
  
  print('--------')
  print(f'A média das idades das pessoas que responderam ótimo: {(soma_idade_otimo/qtd_aval_otimo)}')
  print(f'A quantidade de pessoas que respondeu regular: {qtd_aval_regular}')
  print(f'O percentual de pessoas que respondeu bom entre os entrevistados: {(qtd_aval_bom/qtd_entrevistados)*100}%')

main()