def main():
  salario_atual = int(input('Insira o salário atual do empregado:'))
  salario_reajustado = 0
  soma_salarios_atuais = 0
  soma_salarios_reajustados = 0
  diferenca = 0
  
  while(salario_atual!=0):
    if(salario_atual<=2999.99):
      salario_reajustado = salario_atual*1.25
    else:
      if(salario_atual<=5999.99):
        salario_reajustado = salario_atual*1.2
      else:
        if(salario_atual<=9999.99):
          salario_reajustado = salario_atual*1.15
        else:
          salario_reajustado = salario_atual*1.1
    soma_salarios_atuais += salario_atual
    soma_salarios_reajustados += salario_reajustado
    diferenca = soma_salarios_reajustados - soma_salarios_atuais
    print(f'Novo salário: {salario_reajustado:,.2f}')
    print(f'Soma dos salários atuais: {soma_salarios_atuais:,.2f}')
    print(f'Soma dos salários reajustados: {soma_salarios_reajustados:,.2f}')
    print(f'Diferença entre a soma dos salários reajustados e a soma dos atuais: {diferenca:,.2f}')
    print('----------')
    salario_atual = int(input('Insira o salário atual do empregado:'))
  print('----------')
  print('Fim do Reajuste.')

main()