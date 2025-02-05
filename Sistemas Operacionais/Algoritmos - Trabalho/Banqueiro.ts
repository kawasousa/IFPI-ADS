// Função para verificar se o sistema está em estado seguro
function analisar(alocados: number[][], necessarios: number[][], disponiveis: number[]): void {
    const qtdProcessos = alocados.length;
    const qtdRecursos = disponiveis.length;
    
    const processosFinalizados: boolean[] = new Array(qtdProcessos).fill(false);
    let processosFinalizadosCount = 0;
    let alteracao = true;

    console.log("Recursos disponíveis no início:", disponiveis);
    
    while (processosFinalizadosCount < qtdProcessos && alteracao) {
        alteracao = false;

        for (let p = 0; p < qtdProcessos; p++) {
            if (!processosFinalizados[p]) {
                let podeExecutar = true;

                for (let r = 0; r < qtdRecursos; r++) {
                    if (disponiveis[r] < necessarios[p][r]) {
                        podeExecutar = false;
                        break;
                    }
                }

                if (podeExecutar) {
                    // Processo pode executar, então libera seus recursos
                    for (let r = 0; r < qtdRecursos; r++) {
                        disponiveis[r] += alocados[p][r];
                    }
                    
                    processosFinalizados[p] = true;
                    processosFinalizadosCount++;
                    alteracao = true;
                    console.log(`Processo P${p} finalizado.\nNovos recursos disponíveis:`, disponiveis);
                }
            }
        }
    }

    // O sistema está seguro se todos os processos foram finalizados na simulação.
    if (processosFinalizadosCount === qtdProcessos) {
        console.log("O sistema está em um estado seguro.");
    } else {
        console.log("O sistema está em DEADLOCK! Estado inseguro.");
    }
}

/* -------------------- EXECUÇÃO -------------------- */
const disponiveis: number[] = [0, 1, 1, 1];

const alocados: number[][] = [
    [3, 0, 1, 1],
    [0, 1, 0, 0],
    [1, 1, 1, 0],
    [1, 1, 0, 1],
    [0, 0, 0, 0]
];

const necessarios: number[][] = [
    [1, 1, 0, 0],
    [0, 1, 1, 2],
    [3, 1, 0, 0],
    [0, 0, 1, 0],
    [2, 1, 1, 0]
];

analisar(alocados, necessarios, disponiveis);