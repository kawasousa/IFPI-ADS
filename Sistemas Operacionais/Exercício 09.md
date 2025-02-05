# Exercício 09
## Questão 01
`Resposta`: Para executar o programa utilizando a técnica de **overlay**, o sistema pode carregar apenas uma parte do programa na memória principal de cada vez, otimizar o uso da memória e descarregar os módulos conforme necessário. O sistema possui 64 Kb de memória, dos quais 14 Kb são ocupados pelo sistema operacional, deixando 50 Kb disponíveis para o programa de 90 Kb.

A estratégia seria a seguinte:

- Carregar o **módulo principal** (20 Kb) na memória.
- Carregar o **módulo 1** (10 Kb) junto com o módulo principal, totalizando 30 Kb de uso.
- Após a execução do módulo 1, descarregar esse módulo e carregar o **módulo 2** (20 Kb), somando 40 Kb de uso.
- Descarregar o módulo 2 e carregar o **módulo 3** (40 Kb), totalizando 60 Kb de memória ocupada (20 Kb do módulo principal + 40 Kb do módulo 3).

Com isso, o sistema carrega e descarrega os módulos conforme necessário, utilizando 50 Kb de memória para o programa e mantendo a memória do sistema operacional separada.
## Questão 02
`Resposta`: Após a carga dos programas, a fragmentação interna da memória pode ser calculada da seguinte forma:
- **P1**: O programa PA (4 Kb) ocupa 4 Kb, deixando **4 Kb de fragmentação interna** (8 Kb - 4 Kb).
- **P2**: O programa PB (16 Kb) ocupa 16 Kb, deixando **8 Kb de fragmentação interna** (24 Kb - 16 Kb).
- **P3**: O programa PC (26 Kb) ocupa 26 Kb, deixando **6 Kb de fragmentação interna** (32 Kb - 26 Kb).
A **fragmentação interna total** é a soma das fragmentações de cada partição:  
**4 Kb + 8 Kb + 6 Kb = 18 Kb**.
Portanto, a fragmentação interna será **18 Kb**.
## Questão 03
`Resposta`: Para alocar o programa de 8 Kb, considerando as estratégias de alocação mencionadas:
- **First-fit**: A primeira área que tenha espaço suficiente é escolhida. A partir da lista ordenada, a primeira área com 10 Kb será alocada para o programa de 8 Kb.
- **Best-fit**: A área que tenha o menor espaço restante após alocação é escolhida. A melhor opção seria a área de 9 Kb, que deixa 1 Kb de fragmentação.
- **Worst-fit**: A área que tenha o maior espaço restante após alocação é escolhida. A maior área disponível é a de 20 Kb, que deixa 12 Kb de fragmentação.
Resumindo:
- **First-fit**: 10 Kb
- **Best-fit**: 9 Kb
- **Worst-fit**: 20 Kb
## Questão 04
`Resposta`: 
Estado inicial da memória:
| 5 Kb (A) | 3 Kb (B) | 10 Kb (Livre) | 6 Kb (C) | 26 Kb (Livre) |
### **First-fit**
1. **Aloca D (6 Kb)** → Usa a primeira área livre de **10 Kb**, sobrando **4 Kb**.  
    | 5 Kb (A) | 3 Kb (B) | 6 Kb (D) | 4 Kb (Livre) | 6 Kb (C) | 26 Kb (Livre) |
2. **Libera A (5 Kb)** → Área de A fica livre.  
    | 5 Kb (Livre) | 3 Kb (B) | 6 Kb (D) | 4 Kb (Livre) | 6 Kb (C) | 26 Kb (Livre) |
3. **Aloca E (4 Kb)** → Usa a primeira área livre de **5 Kb**, sobrando **1 Kb**.  
    | 4 Kb (E) | 1 Kb (Livre) | 3 Kb (B) | 6 Kb (D) | 4 Kb (Livre) | 6 Kb (C) | 26 Kb (Livre) |
### **Best-fit**
1. **Aloca D (6 Kb)** → Usa a menor área que pode acomodá-lo, que é **10 Kb**, sobrando **4 Kb**.  
    | 5 Kb (A) | 3 Kb (B) | 6 Kb (D) | 4 Kb (Livre) | 6 Kb (C) | 26 Kb (Livre) |
2. **Libera A (5 Kb)** → Área de A fica livre.  
    | 5 Kb (Livre) | 3 Kb (B) | 6 Kb (D) | 4 Kb (Livre) | 6 Kb (C) | 26 Kb (Livre) |
3. **Aloca E (4 Kb)** → Usa a menor área livre que pode acomodá-lo, que é **4 Kb**.  
    | 5 Kb (Livre) | 3 Kb (B) | 6 Kb (D) | 4 Kb (E) | 6 Kb (C) | 26 Kb (Livre) |
### **Worst-fit**
1. **Aloca D (6 Kb)** → Usa a maior área livre, que é **26 Kb**, sobrando **20 Kb**.  
    | 5 Kb (A) | 3 Kb (B) | 10 Kb (Livre) | 6 Kb (C) | 6 Kb (D) | 20 Kb (Livre) |
2. **Libera A (5 Kb)** → Área de A fica livre.  
    | 5 Kb (Livre) | 3 Kb (B) | 10 Kb (Livre) | 6 Kb (C) | 6 Kb (D) | 20 Kb (Livre) |
3. **Aloca E (4 Kb)** → Usa a maior área livre, que é **20 Kb**, sobrando **16 Kb**.  
    | 5 Kb (Livre) | 3 Kb (B) | 10 Kb (Livre) | 6 Kb (C) | 6 Kb (D) | 4 Kb (E) | 16 Kb (Livre) |