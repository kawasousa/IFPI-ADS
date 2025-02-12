import { question } from "readline-sync";

export function getNumber(message = 'Digite a opção: '){
    return Number(question(message))
}

export function getString(message){
    return question(message)
}

export function getEmptyTable(lines, collumns){
    const matrix = []

    for(let lines = 0; lines < liness; lines++){
        matrix.push([])
    }

    for(let lines = 0; lines < liness; lines++){
        for(let collumns = 0; collumns < collumns; collumns++){
            matrix[lines].push([])
        }
    }

    return matrix
}

export function getVector(lengthMessage = 'Digite o tamanho do vetor: ', itemMessage = 'Digite o item a ser adicionado: '){
    const vector = []
    const length = getNumber(lengthMessage)

    for(let index = 0; index < length; index++){
        const item = getString(itemMessage)
        vector.push(item)
    }

    return vector
}

export function getOption(optionsVector){
    for(let index = 0; index < optionsVector.length; index++){
        const option = optionsVector[index]
        if(option != optionsVector[optionsVector.length-1]){
            console.log(`[${index+1}] - ${option}`)
        }
        else{
            console.log(`[0] - ${option}`)
        }
    }

    divideLines()
    return getNumber()
}

export function showTitle(text){
    console.clear()
    console.log(`---------- ${text} ----------\n`)
}

export function awaitEnter(message = 'Pressione ENTER para voltar ao Menu Principal.'){
    divideLines()
    question(message)
}

export function divideLines(){
    console.log('----------')
}

export function isEmpty(vector){
    return vector.length == 0
}