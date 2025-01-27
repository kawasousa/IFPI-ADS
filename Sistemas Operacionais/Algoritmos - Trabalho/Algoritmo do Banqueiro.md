# Algoritmo do Banqueiro
O **algoritmo do banqueiro** é uma técnica de alocação de recursos e prevenção de deadlocks utilizada em sistemas operacionais. Foi desenvolvido por Edsger W. Dijkstra e é baseado no conceito de empréstimos bancários, daí o nome.
## Objetivo Principal
O algoritmo tem como objetivo gerenciar os recursos de um sistema de forma segura, garantindo que ele nunca entre em um estado de _deadlock_ (impasse). Isso é feito verificando se o sistema pode atender aos pedidos de recursos de diferentes processos sem comprometer o estado seguro do sistema.
## Componentes do Algoritmo
1. **Processos**: Conjuntos de tarefas que precisam de recursos para serem executadas.
2. **Recursos**: Itens como memória, CPUs, impressoras, ou arquivos que os processos precisam acessar.
3. **Estado Seguro**: Um estado em que o sistema pode alocar recursos aos processos de forma que todos possam terminar sua execução eventualmente.
4. **Matriz de Controle**:
    - **Máxima Necessidade (Max)**: Número máximo de cada recurso que cada processo pode solicitar.
    - **Alocado (Allocated)**: Número de recursos atualmente alocados para cada processo.
    - **Necessidade (Need)**: Recursos ainda necessários para cada processo (calculado como `Max - Allocated`).
    - **Disponível (Available)**: Quantidade de recursos livres no momento.
## Funcionamento do Algoritmo
1. **Entrada**: O algoritmo analisa:
    - Recursos disponíveis no sistema.
    - Recursos já alocados para os processos.
    - Necessidades futuras dos processos.
2. **Pedido de Recursos**:
    - Quando um processo solicita recursos, o algoritmo verifica se o pedido pode ser atendido sem comprometer a segurança do sistema.
3. **Teste de Segurança**:
    - Simula a concessão dos recursos para verificar se o sistema permanece em um estado seguro.
    - Se o sistema permanecer seguro, os recursos são alocados.
    - Caso contrário, o pedido é negado até que o estado seguro possa ser mantido.
## Exemplo Simplificado
Imagine um sistema com:
- **3 processos (P1, P2, P3)**.
- **3 tipos de recursos (R1, R2, R3)**.
- Inicialmente, há 10 unidades de cada recurso.
Se o processo P1 solicitar 2 unidades de R1, 3 de R2 e 1 de R3, o algoritmo:
1. Verifica se o pedido é menor ou igual ao máximo necessário e se os recursos estão disponíveis.
2. Simula a alocação para verificar se ainda existe uma sequência segura de execução dos processos.
3. Aprova ou nega o pedido com base nessa análise.
### Benefícios
- Previne deadlocks antes que eles ocorram.
- Oferece controle rigoroso sobre a alocação de recursos.
### Limitações
- Requer conhecimento prévio da quantidade máxima de recursos que cada processo pode precisar.
- Alto custo computacional para sistemas com muitos processos e recursos.
- Difícil de implementar em sistemas dinâmicos ou distribuídos.