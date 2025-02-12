class Processo:
    def __init__(self, nome, ingresso, duracao):
        self.nome = nome
        self.ingresso = ingresso
        self.duracao = duracao
        self.tempo_restante = duracao
        self.tempo_executado = 0
        self.tempo_finalizacao = 0

def round_robin(processos, quantum, troca_contexto):
    tempo_atual = 0
    fila = []
    ordem_execucao = []
    processos.sort(key=lambda p: p.ingresso)
    processos_executados = []
    
    tempos_espera = {p.nome: 0 for p in processos}
    tempos_vida = {p.nome: 0 for p in processos}

    while processos or fila:
        while processos and processos[0].ingresso <= tempo_atual:
            fila.append(processos.pop(0))

        if fila:
            processo = fila.pop(0)
            ordem_execucao.append(processo.nome)
            exec_time = min(quantum, processo.tempo_restante)
            processo.tempo_restante -= exec_time
            processo.tempo_executado += exec_time
            tempo_atual += exec_time

            while processos and processos[0].ingresso <= tempo_atual:
                fila.append(processos.pop(0))

            if processo.tempo_restante > 0:
                fila.append(processo)
                if fila or processos:
                    tempo_atual += troca_contexto
            else:
                processo.tempo_finalizacao = tempo_atual
                processos_executados.append(processo)
                tempos_vida[processo.nome] = processo.tempo_finalizacao - processo.ingresso
                tempos_espera[processo.nome] = tempos_vida[processo.nome] - processo.duracao
        else:
            tempo_atual = processos[0].ingresso if processos else tempo_atual

    if len(tempos_vida) > 0 and len(tempos_espera) > 0:
        tm_vida = sum(tempos_vida.values()) / len(tempos_vida)
        tm_espera = sum(tempos_espera.values()) / len(tempos_espera)
    else:
        tm_vida = 0
        tm_espera = 0

    return ordem_execucao, round(tm_vida, 2), round(tm_espera, 2)
    
def main():
    print("===== Algoritmo Round Robin =====")
    qtd_processos = int(input("Quantidade de processos: "))
    quantum = int(input("Tempo de quantum: "))
    troca_contexto = int(input("Tempo de troca de contexto: "))

    processos = []
    
    print("\n--- Processos ---")
    for i in range(qtd_processos):
        nome = f"P{i+1}"
        ingresso = int(input(f"Tempo de ingresso do processo {nome}: "))
        duracao = int(input(f"Duração do processo {nome}: "))
        processos.append(Processo(nome, ingresso, duracao))

    ordem_execucao, tm_vida, tm_espera = round_robin(processos, quantum, troca_contexto)

    print("\n---Análise---")
    print("Ordem de execução:\n", "\n ".join(ordem_execucao))
    print("Tempo médio de vida:", tm_vida)
    print("Tempo médio de espera:", tm_espera)

main()