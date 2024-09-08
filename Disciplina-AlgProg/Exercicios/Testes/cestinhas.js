import { obterNumero } from "./miniutils.js"

function matrix(){
    const robero = [[1,2,3],[2,3,4],[3,4,5]]
   
    /*
    A primeira dimensao em uma matriz é i, que trata das linhas
    A segunda dimensão é j, que representa as colunas

    -> Para obter a diagonal principal de uma matriz, faz-se um for buscando os indices em que i e j são iguais
    */

    //Matriz M(4,4)
   const m = [
        [0,2],[0,1],[0,2],[0,3]
    ]
    /*
    For dentro de For representa um crescimento ruim.
    */
   console.log(m[0][1])

   const times = [
    [0,'Gremio','A',10,],



    [2,'Bahia','C',8,'BA',['P','V','']],
    [3,'Inter','B',7,'RS',['A','B','']],
    [4,'Vasco','D',4,'RJ',['','','']]
    ]
    const serie = obterSerie(times, 3)
    const time = obterTime(times, 3)

    console.log(`Serie do time ${time} é ${serie}!`)

  /*
  Criar matriz de times, ler os valores, Atualizar os valores e Remover itens
  */
}

function obterDiagonalPrincipal(matriz){
    const diagonal = []
    
    for(let indice = 0; indice < matrix.length; indice++){
        const item = matriz[indice][indice]
        diagonal.push(item)
    }
    
    return diagonal
}

function obterSerie(tabela, chave){
    const serie = tabela[chave-1][2]
    return serie
}

function obterTime(tabela, chave){
    const time = tabela[chave-1][1]
    return time
}

function obterMatriz(){
    const linhas = obterNumero('Digite o numero de linhas: ')
    const colunas = obterNumero('Digite o numero de colunas: ')
    const matriz = gerarMatrizVazia(linhas, colunas)

    for(let linha = 0; linha < linhas; linha++){
        for(let coluna = 0; coluna < colunas; coluna++){
            matriz[linha][coluna] = obterNumero(`Digite o valor da posição ${linha}x${coluna}: `)
        }
    }

    return matriz
}

function gerarMatrizVazia(linhas, colunas){
    const matriz = []

    for(let linha = 0; linha < linhas; linha++){
        matriz.push([])
    }

    for(let linha = 0; linha < linhas; linha++){
        for(let coluna = 0; coluna < colunas; coluna++){
            matriz[linha].push([])
        }
    }

    return matriz
}

function main(){
    console.clear()

    const matriz = obterMatriz()
    console.log(matriz)
}
main()