import { getRandomNumberInRange, getNumber, awaitEnter, getPositiveNumber } from "./utils.js";
import { addToVector, exponentiateValues, isPositive, multiplyValues, toMap } from "./vector_utils.js";

export function generateVector(length, minimum, maximum){
    const vector = []
    for(let index = 0; index < length; index++){
        let number = getRandomNumberInRange(minimum, maximum)

        while(number < minimum || number > maximum){
            number = getRandomNumberInRange(minimum, maximum)
        }
        vector.push(number)
    }

    return vector
}

export function showOptions(vector, lastItemName){
    for(let index = 0; index < vector.length; index++){
        let option = vector[index]

        let extraSpace = Number(index+1 < 10)

        console.log(`[${'0'.repeat(extraSpace)}${index+1}] - ${option}`)
    }
    
    console.log(`\n[0]  - ${lastItemName}`)
}

export function getVectorSize(vector = []){
    return vector.length
}

//Return the largest number in received vector
export function getLargestNumber(vector){
    let largestNumber = 0
    
    for(let item of vector){
        if(item > largestNumber){
            largestNumber = item
        }
    }
    
    return largestNumber
}

export function getLargestIndex(vector){
    let largestNumber = getLargestNumber(vector)
    let largestIndex = 0

    for(let index = 0; index < vector.length; index++){
        const item = vector[index]

        if(item == largestNumber){
            largestIndex = index
            break
        }
    }

    return largestIndex
}

//Return the smallest number in received vector
export function getSmallestNumber(vector){
    let smallest = vector[0]

    for(let item of vector){
        if(item < smallest){
            smallest = item
        }
    }

    return smallest
}

export function getSmallestIndex(vector){
    let smallestNumber = getSmallestNumber(vector)
    let smallestIndex = 0

    for(let index = 0; index < vector.length; index++){
        const item = vector[index]

        if(item == smallestNumber){
            smallestIndex = index
            break
        }
    }

    return smallestIndex
}

//Show the itens of the received vector
export function showItens(vector, text = 'Os itens da sua cestinha são '){
    if(getVectorSize(vector) === 0){
        console.log('Seu vetor está vazio!')
        return
    }

    let phrase = text
    let lastIndex = vector.length-1

    for(let index = 0; index < vector.length; index++){
        const item = vector[index]

        if(index == lastIndex){
            phrase += `e ${item}.`
        }
        else{
            phrase += item + ', '
        }
    }

    console.log(phrase)
}

//Return true if the received item is in the received vector
export function isInVector(item, vector){
    for(let index of vector){
        if(index === item){
            return true
        }
    }

    return false
}

export function getValuesSum(vector){
    let summation = 0

    for(let item of vector){
        summation += item
    }

    return summation
}

export function getValueAverage(vector){
    const average = getValuesSum(vector) / getVectorSize(vector) 
    return average.toFixed(2)
}

export function getPositiveValues(vector){
    const newVector = []

    for(let item of vector){
        if(isPositive(item)){
            newVector.push(item)
        }
    }

    return newVector
}

export function getNegativeValues(vector){
    const newVector = []

    for(let item of vector){
        if(!isPositive(item)){
            newVector.push(item)
        }
    }

    return newVector
}

export function getVectorParameters(){
    const parameters = []
    
    const length = getPositiveNumber('Digite o tamanho do vetor: ')
    const minimum = getNumber('Agora digite o valor minimo para um item do vetor: ')
    let maximum = getNumber('Agora digite o valor maximo para um item do vetor: ')
    
    while(maximum < minimum){
        console.log('\nO valor máximo deve ser maior que o valor mínimo!')
        maximum = getPositiveNumber('Digite o valor maximo para um item do vetor: ')
    }

    parameters.push(length, minimum, maximum)

    return parameters
}

export function updateVectorValues(option, vector){
    const functions = {
        1: ''
    }

    vector = toMap(vector, functions[option])

    return vector
}

export function toFilter(vector, condition){
    let newVector = []

    for(const item of vector){
        if(condition(item)){
            newVector = addToVector(item, newVector)
        }
    }
    return newVector
}

export function toReduce(vector, func, initial){
    let result = 0

    for(const item of vector){
        result = func(result, item)
    }

    return result
}