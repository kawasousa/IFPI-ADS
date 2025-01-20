import { getVectorByArchive, saveVectorInFile } from './file_utils.js'
import { awaitEnter, divideLines, getNumber, getPositiveNumber, showTitle } from './utils.js'
import {
        generateVector, getVectorSize, showOptions, getLargestNumber, getSmallestNumber,
        showItens, isInVector, getLargestIndex, getSmallestIndex, getValuesSum,
        getValueAverage, addItem, getPositiveValues,
        getVectorParameters, getNegativeValues,
        updateVectorValues
        } from './vector_functions.js'
import { getIndexVector, removeFromVector } from './vector_utils.js'


function getMainOptions(){
    const options = [
        'Inicializar uma Cestinha de numeros', 'Mostrar todos os valores', 'Resetar Cestinha',
        'Ver a quantidade de itens na Cestinha', 'Ver maior e menor valor e suas posições', 'Somatorio dos Valores',
        'Média dos valores', 'Mostrar valores Positivos e suas Quantidades', 'Mostrar Valores Negativos e suas quantidades',
        'Atualizar todos os valores por uma regra', 'Adicionar novos valores', 'Remover itens por valor exato', 'Remover Itens por Posição',
        'Editar valor específico por posição','Salvar valores em arquivo'
    ]
    showTitle(`Aplicativo das Cestinhas`)

    showOptions(options, '\x1b[31mSalvar e Sair\x1b[0m')

    return getNumber()
}

function main(){
    let option = getMainOptions()
    let vector = []
    
    while(true){
        if(option === 1){
            const decisions = ['Criar uma Cestinha manualmente', 'Gerar Cestinha com numeros aleatorios', 'Carregar Cestinha de um arquivo']
            const decisionIndexs = getIndexVector(decisions)
            
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
                    const parameters = getVectorParameters()
                    const length = parameters[0]
                    const minimum = parameters[1]
                    const maximum = parameters[2]

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
                    const parameters = getVectorParameters()

                    const length = parameters[0]
                    const minimum = parameters[1]
                    const maximum = parameters[2]

                    vector =  generateVector(length, minimum, maximum)
                    console.log(`\nSeu vetor agora é [${vector}]!`)
                    awaitEnter()
                }
                if(decision == 3){
                    vector = getVectorByArchive('myVector.txt')
                    console.log(`Sua Cestinha foi atualizada!`)
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
            const decisions = ['\x1b[31mSim\x1b[0m']
            const decisionIndexs = getIndexVector(decisions)
            
            showTitle(`Tem certeza que deseja resetar a Cestinha? (as alterações não salvas serão perdidas)`)
            
            showOptions(decisions, 'Não (voltar ao Menu Principal)')
            let decision = getNumber()
            
            while( !isInVector(decision, decisionIndexs)){
                showTitle(`Tem certeza que deseja resetar a Cestinha? (as alterações não salvas serão perdidas)`)
                if(decision == 0){break}

                showOptions(decisions, 'Não (voltar ao Menu Principal)')
                decision = getNumber()
            }

            if(decision == 1){
                vector = []

                showTitle('Sua Cestinha foi resetada!')                
                awaitEnter('Pressione ENTER para definir uma nova Cestinha.')
                option = 1
                continue
            }
        }
        else if(option == 4){
            showTitle('Quantidade de itens na Cestinha')
            let vectorSize = getVectorSize(vector)
            console.log(`Sua Cestinha tem ${vectorSize} itens!`)

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
            showTitle('Somatório dos valores da Cestinha')

            const summation = getValuesSum(vector)
            console.log(`A soma dos valores do sua Cestinha é ${summation}`)

            awaitEnter()
        }
        else if(option == 7){
            showTitle('Média dos valores do sua Cestinha')

            let average = getVectorSize(vector) == 0 ? 0 : getValueAverage(vector) 
            console.log(`A média dos valores do sua Cestinha é ${average}!`)

            awaitEnter()
        }
        else if(option == 8){
            showTitle('Valores \x1b[34mPositivos\x1b[0m da sua Cestinha')

            let positiveVector = getPositiveValues(vector)
            showItens(positiveVector, 'Os itens maiores que zero são ')

            awaitEnter()
        }
        else if(option == 9){
            showTitle('Valores \x1b[31mNegativos\x1b[0m da sua Cestinha')

            let negativeVector = getNegativeValues(vector)
            showItens(negativeVector, 'Os itens menores que zero são ')

            awaitEnter()
        }
        else if(option == 10){
            const decisions = ['Multiplicar por um valor', 'Elevar a um valor', 'Reduzir a uma fração',
                                'Substituir números negativos por um valor aleatório', 'Ordenar valores', 'Embaralhar valores']
            const decisionIndexs = getIndexVector(decisions)
            showTitle('Atualizar Itens')
            showOptions(decisions, 'Voltar')

            let decision = getNumber()
            while(!isInVector(decision, decisionIndexs)){
                decision = getNumber()
            }

            vector = updateVectorValues(decision, vector)

            if(decision != 0){
                console.log(`Sua Cestinha foi atualizada!`)
            }
            awaitEnter()
        }
        else if(option == 11){
            showTitle('Adicionar item à Cestinha')
            const newNumber = getNumber('Qual numero deve ser adicionado na Cestinha?\n-> ')

            vector = addItem(newNumber, vector)
            console.log(`O número ${newNumber} foi adicionado à sua Cestinha!`)
            awaitEnter()
        }
        else if(option == 12){
            showTitle('Remover item da Cestinha por Valor')
            showItens(vector)
            
            if(getVectorSize(vector) != 0){
                let removedNumber = getNumber('\nDigite o valor que deseja remover: ')
                
                while(!isInVector(removedNumber, vector)){
                    console.log(`${removedNumber} não está na sua Cestinha!`)
                    removedNumber = getNumber('\nDigite o valor que deseja remover: ')
                }
    
                vector = removeFromVector(removedNumber, vector)
    
                divideLines()
                console.log(`${removedNumber} foi \x1b[31mremovido\x1b[0m da sua Cestinha!`)
            }
            else{
                console.log(`\x1b[33mInicie um vetor antes de remover itens!\x1b[0m`)
            }

            awaitEnter()
        }
        else if(option == 13){
            
            showTitle('Remover item da cestinha por Posição')
            if(getVectorSize(vector) != 0){
                showOptions(vector, 'Voltar')
                const vectorIndexs = getIndexVector(vector)

                let removedIndex = getNumber('\nDigite a posicao do numero que deseja remover: ')
                
                while(!isInVector(removedIndex, vectorIndexs)){
                    console.log(`${removedIndex} não é uma posição na sua Cestinha!`)
                    removedIndex = getNumber('\nDigite a posicao do numero que deseja remover: ')
                }
            
                if(removedIndex != 0){
                    removedIndex
                    vector = removeFromVector(vector[removedIndex], vector)
                    console.log(`O número da posição ${removedIndex} (${vector[removedIndex-1]}) foi \x1b[31mremovido\x1b[0m da sua Cestinha!`)
                    divideLines()
                    awaitEnter()
                }
            }
            else{
                console.log(`Sua Cestinha está vazia.\n\x1b[33mInicie um vetor antes de remover itens!\x1b[0m`)
                awaitEnter()
            }
        }
        else if(option == 14){
            showTitle('Editar valor por Posição')
            showOptions(vector, 'Voltar')
            divideLines()

            const index = getPositiveNumber('Digite a posicao do numero a ser editado: ')
            const newNumber = getNumber('Digite o numero que vai ocupar essa posicao: ')

            vector[index] = newNumber
            console.log(`O número da posição ${index} foi substituído por ${newNumber}!`)

            awaitEnter()
        }
        else if(option == 15){
            showTitle('Salvar Cestinha em arquivo externo')
            console.log(`Tem certeza que deseja salvar as alterações? O ultimo salvamento será perdido!\n`)

            const decisions = ['Sim']
            const decisionsIndex = getIndexVector()
            showOptions(decisions, 'Não (voltar ao Menu Pricipal)')
            
            const decision = getNumber()

            if(decision == 1){
                saveVectorInFile(vector)
            }
            
            console.log('Cestinha salva com sucesso!')    
            awaitEnter()
        }
        
        else if(option == 0){
            showTitle('Cestinha salva!')
            saveVectorInFile(vector)
            awaitEnter('Pressione ENTER para finalizar!')
            break
        }


        option = getMainOptions()
    }


}
main()