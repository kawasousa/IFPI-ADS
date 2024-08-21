import { awaitEnter, divideLines, getNumber, getPositiveNumber, showTitle } from './utils.js'
import { generateVector, getVectorSize, showOptions, getLargestNumber, getSmallestNumber, showItens, isInVector, getLargestIndex, getSmallestIndex, getValuesSum, getValueAverage, addItem } from './vector_functions.js'

function getMainOptions(){
    const options = [
        'Inicializar um vetor numérico', 'Mostrar todos os valores', 'Resetar Vetor',
        'Ver a quantidade de itens no vetor', 'Ver maior e menor valor e suas posições', 'Somatorio dos Valores',
        'Média dos valores', 'Mostrar valores Positivos e suas Quantidades', 'Mostrar Valores Negativos e suas quantidades',
        'Atualizar todos os valores por uma regra', 'Adicionar novos valores', 'Remover itens por valor exato', 'Remover Itens por Posição',
        'Editar valor específico por posição','Salvar valores em arquivo'
    ]
    showTitle(`Aplicativo dos Vetores`)

    showOptions(options, 'Sair')

    return getNumber()
}

function main(){
    let option = getMainOptions()
    let vector = []
    
    while(option != 0){
        if(option === 1){
            const decisions = ['Criar vetor manualmente', 'Gerar vetor com numeros aleatorios']
            const decisionIndexs = [0,1,2]
            

            showTitle(`Deseja gerar numeros aleatórios ou iniciar manualmente?`)
            
            showOptions(decisions, 'Voltar')
            let decision = getNumber()
            
            while( !isInVector(decision, decisionIndexs)){
    
                showTitle(`Deseja gerar numeros aleatórios ou iniciar manualmente?`)
                if(decision == 0){break}

                showOptions(decisions, 'Voltar')
                decision = getNumber()
            }
            
            if(decision != 0){
                divideLines()
                const length = getPositiveNumber('Digite o tamanho do vetor: ')
                const minimum = getPositiveNumber('Agora digite o valor minimo para um item do vetor: ')
                let maximum = getPositiveNumber('Agora digite o valor maximo para um item do vetor: ')
                
                while(maximum < minimum){
                    console.log('\nO valor máximo deve ser maior que o valor mínimo!')
                    maximum = getPositiveNumber('Digite o valor maximo para um item do vetor: ')
                }
    
                if(decision == 1){
                    for(let index = 0; index < length; index++){
                        const number = getNumber('Digite o numero a ser adicionado: ')
                        vector = addItem(number, vector)
                    }
                }
                if(decision == 2){
                    vector =  generateVector(length, minimum, maximum)
                    console.log(`\nSeu vetor agora é [${vector}]!`)
                    awaitEnter()
                }
            }
            

        }

        else if(option == 2){
            showItens(vector)
            awaitEnter()
        }

        else if(option == 3){
            const decisions = ['Sim']
            const decisionIndexs = [0,1]
            

            showTitle(`Tem certeza que deseja resetar o vetor? (as alterações serão perdidas)`)
            
            showOptions(decisions, 'Não (voltar ao Menu Principal)')
            let decision = getNumber()
            
            while( !isInVector(decision, decisionIndexs)){
    
                showTitle(`Tem certeza que deseja resetar o vetor? (as alterações serão perdidas)`)
                if(decision == 0){break}

                showOptions(decisions, 'Não (voltar ao Menu Principal)')
                decision = getNumber()
            }

            if(decision == 1){
                vector = []
    

                showTitle('Seu vetor foi resetado!')
                console.log('vetor = []')
                awaitEnter()
            }
        }

        else if(option == 4){
            showTitle('Quantidade de itens no vetor')
            let vectorSize = getVectorSize(vector)
            console.log(`Seu vetor tem ${vectorSize} itens!`)

            awaitEnter()
        }

        else if(option == 5){
            showTitle('Maior e Menor Valor')

            if(getVectorSize(vector) == 0){
                console.log('Seu vetor não tem itens!')
            }
            else{
                const largestItem = getLargestNumber(vector)
                const largestIndex = getLargestIndex(vector)
                const smallest = getSmallestNumber(vector)
                const smallestIndex = getSmallestIndex(vector)
    
                console.log(`O maior item do seu vetor é ${largestItem}, na ${largestIndex+1}º posição`)
                console.log(`Já o menor item do seu vetor é ${smallest}, na ${smallestIndex+1}º posição`)
            }

            awaitEnter()
        }
        else if(option == 6){
            showTitle('Somatório dos valores do vetor')

            const summation = getValuesSum(vector)
            console.log(`A soma dos valores do seu vetor é ${summation}`)

            awaitEnter()
        }
        else if(option == 7){
            showTitle('Média dos valores do seu vetor')

            let average = getVectorSize(vector) == 0 ? 0 : getValueAverage(vector) 
            console.log(`A média dos valores do seu vetor é ${average}!`)

            awaitEnter()
        }
        else if(option == 8){
            showTitle('Valores positivos do seu vetor')

            positiveVector

            awaitEnter()
        }


        option = getMainOptions()
    }


}
main()