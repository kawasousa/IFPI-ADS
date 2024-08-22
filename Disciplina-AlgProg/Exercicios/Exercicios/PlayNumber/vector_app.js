import { getVectorByArchive } from './file_utils.js'
import { awaitEnter, divideLines, getNumber, getPositiveNumber, showTitle } from './utils.js'
import { generateVector, getVectorSize, showOptions, getLargestNumber, getSmallestNumber, showItens, isInVector, getLargestIndex,
         getSmallestIndex, getValuesSum, getValueAverage, addItem, getPositiveValues,
         getVectorParameters, getNegativeValues} from './vector_functions.js'
import { removeFromVector } from './vector_utils.js'


function getMainOptions(){
    const options = [
        'Inicializar um vetor numérico', 'Mostrar todos os valores', 'Resetar Vetor',
        'Ver a quantidade de itens no vetor', 'Ver maior e menor valor e suas posições', 'Somatorio dos Valores',
        'Média dos valores', 'Mostrar valores Positivos e suas Quantidades', 'Mostrar Valores Negativos e suas quantidades',
        'Atualizar todos os valores por uma regra', 'Adicionar novos valores', 'Remover itens por valor exato', 'Remover Itens por Posição',
        'Editar valor específico por posição','Salvar valores em arquivo'
    ]
    showTitle(`Aplicativo das Cestinhas`)

    showOptions(options, 'Sair')

    return getNumber()
}

function main(){
    let option = getMainOptions()
    let vector = []
    
    while(option != 0){
        if(option === 1){
            const decisions = ['Criar um vetor manualmente', 'Gerar vetor com numeros aleatorios', 'Carregar vetor de um arquivo']
            const decisionIndexs = [0,1,2,3]
            

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
    
                if(decision == 1){
                    const length = getVectorParameters()[0]
                    const minimum = getVectorParameters()[1]
                    const maximum = getVectorParameters()[2]

                    for(let index = 0; index < length; index++){
                        let number = getNumber('Digite o numero a ser adicionado: ')
                        while(number > maximum || number < minimum){
                            console.log('O número está fora do alcance definido!')
                            number = getNumber('Digite o numero a ser adicionado: ')
                        }
                        
                        vector = addItem(number, vector)
                    }
                }
                if(decision == 2){
                    const length = getVectorParameters()[0]
                    const minimum = getVectorParameters()[1]
                    const maximum = getVectorParameters()[2]

                    vector =  generateVector(length, minimum, maximum)
                    console.log(`\nSeu vetor agora é [${vector}]!`)
                    awaitEnter()
                }
                if(decision == 3){
                    vector = getVectorByArchive('myVector.txt')
                    console.log(`Seu vetor foi atualizado!`)
                    awaitEnter()
                }
            }
            
        }

        else if(option == 2){
            showTitle('Itens da sua Cestinha')
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
                awaitEnter('Pressione enter para definir um novo vetor.')
                option = 1
                continue
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
            showTitle('Valores \x1b[34mPositivos\x1b[0m da sua cestinha')

            let positiveVector = getPositiveValues(vector)
            showItens(positiveVector, 'Os itens maiores que zero são ')

            awaitEnter()
        }

        else if(option == 9){
            showTitle('Valores \x1b[31mNegativos\x1b[0m da sua cestinha')

            let negativeVector = getNegativeValues(vector)
            showItens(negativeVector, 'Os itens menores que zero são ')

            awaitEnter()
        }

        else if(option == 10){

        }

        else if(option == 11){
            showTitle('Adicionar item à cestinha')
            const decisions = [vector]
            showOptions(vector, 'Voltar')

            awaitEnter()
        }

        else if(option == 12){
            showTitle('Remover item da cestinha')
            showItens(vector)
            const removedNumber = getNumber('\nDigite o valor que deseja remover: ')

            vector = removeFromVector(removedNumber, vector)

            divideLines()
            console.log(`${removedNumber} foi removido da sua cestinha!`)
            awaitEnter()
        }


        option = getMainOptions()
    }


}
main()