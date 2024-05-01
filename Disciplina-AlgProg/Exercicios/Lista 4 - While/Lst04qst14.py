def main():
  voto = int(input('Digite o código do candidato:'))
  cont_votos = 0
  votos_ciro = 0
  votos_dilma = 0
  votos_serra = 0
  votos_outros = 0
  votos_indecisos = 0
  votos_nulos = 0
  segundo_turno = 'Sim'
  
  while(voto!= -1):
    if(voto==23):
      votos_ciro +=1
    else:
      if(voto==13):
        votos_dilma +=1
      else:
        if(voto==45):
          votos_serra +=1
        else:
          if(voto==99):
            votos_indecisos +=1
          else:
            if(voto==98):
              votos_outros +=1
            else:
              if(voto==0):
                votos_nulos +=1
    if(voto!=23 and voto!=45 and voto!=13 and voto!=99 and voto!=98 and voto!=0):
      print('Voto inválido')
    else:
      cont_votos += 1
    print('---------')
    voto = int(input('Digite o código do candidato:'))
  
  percent_ciro = 100*(votos_ciro/cont_votos)
  percent_dilma = 100*(votos_dilma/cont_votos)
  percent_serra = 100*(votos_serra/cont_votos)
  percent_outros = 100*(votos_outros/cont_votos)
  percent_indecisos = 100*(votos_indecisos/cont_votos)
  percent_nulos = 100*(votos_nulos/cont_votos)
  
  if(percent_outros>=51 or percent_dilma>=51 or percent_serra>=51 or percent_outros>=51 or percent_indecisos>=51 or percent_nulos>=51):
    segundo_turno = 'Não'
  
  print('---------')
  print('Fim da pesquisa')
  print(f'Porcentagem do candidato Ciro: {percent_ciro}%')
  print(f'Porcentagem da candidata Dilma: {percent_dilma}%')
  print(f'Porcentagem do candidata Serra: {percent_serra}%')
  print(f'Porcentagem de outros candidatos: {votos_outros}%')
  print(f'Porcentagem de eleitores indecisos: {percent_indecisos}%')
  print(f'Porcentagem votos nulos: {percent_nulos}%')
  print(f'Total de intrevistados: {cont_votos}')
  print(f'É possível haver segundo turno?: {segundo_turno}')

main()