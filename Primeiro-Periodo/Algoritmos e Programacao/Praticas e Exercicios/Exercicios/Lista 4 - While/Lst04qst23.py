def main():
  razao = float(input('Digite a razão da Progressão Geométrica:'))
  prim_termo = float(input('Digite o primeiro número da progressão:'))
  qtd_termos = int(input('Digite a quantidade de termos exibidos na progressão'))
  cont_termos = 0
  termo = prim_termo
  
  while(cont_termos<qtd_termos):
    print(termo)
    termo = termo*razao
    cont_termos += 1

main()