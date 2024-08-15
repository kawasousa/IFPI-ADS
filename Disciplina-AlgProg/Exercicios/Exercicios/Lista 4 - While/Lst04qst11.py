def main():
  matricula = get_number('Digite o número da matrícula do aluno:')
  aprovados = 0
  reprovados = 0
  alunos = 0
  
  while(matricula!=0):
    nota1 = get_number('Digite a primeira nota:')
    nota2 = get_number('Digite a segunda nota:')
    nota3 = get_number('Digite a terceira nota:')
    med_final = calc_media(nota1, nota2, nota3)
    situacao = verif_media(med_final)
    if(situacao=='Aprovado'):
      aprovados += 1
    else:
      reprovados += 1
    matricula = get_number('Digite o número da matrícula do aluno:')
  print(f'Número de aprovados: {aprovados}')
  print(f'Número de reprovados: {reprovados}')
  print(f'Total de alunos: {(aprovados+reprovados)}')
#Fim da main

def calc_media(nota1, nota2, nota3):
  med_final = (nota1*2 + nota2*3 + nota3*5) / 10
  return med_final

def verif_media(media_final):
  situacao = 'Reprovado'
  if(media_final>=7):
    situacao = 'Aprovado'
  return situacao

def get_number(number):
  return float(input(number))

main()