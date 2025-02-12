# Algoritmo Circular
O **algoritmo circular** é amplamente utilizado em sistemas operacionais para gerenciar a substituição de páginas na memória principal. Ele é uma versão modificada do algoritmo **FIFO (First In, First Out)**, projetada para ser mais eficiente. É também chamado de **algoritmo do ponteiro** porque utiliza um ponteiro que circula pela lista de páginas na memória, como em um buffer circular.
## Contexto
O algoritmo circular é comumente empregado na substituição de páginas no gerenciamento de memória virtual. Quando ocorre um _page fault_ (uma página necessária não está na memória), o sistema precisa decidir qual página existente será substituída para liberar espaço.
## Funcionamento do Algoritmo
1. **Organização Circular**:
    - As páginas na memória são organizadas de forma lógica como uma lista circular.
    - Um ponteiro percorre essa lista de forma cíclica.
2. **Bit de Referência**:
    - Cada página possui um bit de referência associado.
    - Esse bit é:
        - **1 (referenciada)**: A página foi usada recentemente.
        - **0 (não referenciada)**: A página não foi usada recentemente.
3. **Passos do Algoritmo**:
    - Quando ocorre um _page fault_, o ponteiro verifica a página atual:
        1. Se o bit de referência for **0**, a página é substituída.
        2. Se o bit de referência for **1**, o bit é redefinido para **0**, e o ponteiro avança para a próxima página.
    - O processo continua até encontrar uma página com bit de referência igual a **0**.
4. **Substituição**:
    - A página com bit **0** é substituída, e o ponteiro é ajustado para a próxima posição na lista circular.
## Benefícios
- **Melhoria sobre FIFO**: Evita substituir páginas que foram referenciadas recentemente, um problema comum no FIFO.
- **Baixa complexidade**: Simples de implementar e requer apenas um bit extra por página.
- **Eficiência**: Trabalha bem em sistemas onde o padrão de uso de memória é razoavelmente previsível.
### Comparação com Outros Algoritmos
1. **FIFO**:
    - Substitui a página mais antiga, sem levar em conta seu uso recente.
    - O algoritmo circular é uma melhoria ao considerar o bit de referência.
2. **LRU (Least Recently Used)**:
    - Substitui a página menos recentemente usada, mas é mais caro em termos de implementação, pois exige rastrear a ordem de uso das páginas.
    - O algoritmo circular é mais simples e rápido.
3. **Ótimo (Belady)**:
    - Substitui a página que não será usada por mais tempo no futuro.
    - Este é teórico e impraticável em sistemas reais, enquanto o circular é viável.
## Exemplo Simples
Imagine 3 quadros de memória e uma sequência de acesso às páginas:  
**1, 2, 3, 1, 4, 2, 5**.
- Inicialmente, o ponteiro está no primeiro quadro.
- As páginas 1, 2 e 3 são carregadas nos quadros, e o ponteiro avança.
- Ao acessar a página 1 novamente, o ponteiro não a substitui porque ela foi referenciada (bit = 1).
- Quando a página 4 é requisitada, o ponteiro encontra a página 2 com bit = 0 e a substitui.
## Vantagens e Limitações
**Vantagens**:
- Mais justo que FIFO.
- Menos complexo que LRU.
**Limitações**:
- Não é tão eficiente quanto LRU ou algoritmos ótimos em certos casos.
- Depende de um bom ajuste do bit de referência para funcionar bem.