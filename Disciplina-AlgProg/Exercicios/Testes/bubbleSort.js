function bubbleSort(colecao){
    let ultimaPosicao = colecao.length - 1;
    let qtdItensAOrdenar = colecao.length - 1;

    while(qtdItensAOrdenar > 0){
        for(let i = 0; i < colecao.length; i++){
            if(colecao[i] > colecao[i+1]){
                const aux = colecao[i]
                colecao[i] = colecao[i+1]
                colecao[i+1] = aux
            }
        }

        qtdItensAOrdenar--;
    }
}

function main(){
    let colecao = [23,31,45,76,21,32,3]

    let colecaoOrdenada = bubbleSort(colecao)
}
main();