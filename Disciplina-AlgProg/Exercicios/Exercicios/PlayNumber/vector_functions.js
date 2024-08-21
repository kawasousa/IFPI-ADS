import { getRandomNumber, getNumber } from "./utils.js";

export function generateVector(length, minimum, maximum){
    const vector = []
    for(let index = 0; index < length; index++){
        let number = getRandomNumber()

        while(number < minimum || number > maximum){
            number = getRandomNumber()
        }
        vector.push(number)
    }

    return vector
}

export function showOptions(vector, lastItemName){
    for(let index = 0; index < vector.length; index++){
        let option = vector[index]

        let extraSpace = Number(index+1 < 10)

        console.log(`${' '.repeat(extraSpace)}${index+1} - ${option}`)
    }

    console.log(`\n 0 - ${lastItemName}`)
}

export function getVectorSize(vector){
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
    let largestNumber = vector[0]
    let largestIndex = 0

    for(let index = 0; index < vector.length; index++){
        const item = vector[index]

        if(item > largestNumber)
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

//Show the itens of the received vector
export function showItens(vector){
    console.clear()
    console.log('------- Itens do Vetor -------')
    
    if(vector.length == 0){
        console.log('Seu vetor está vazio!')
        return
    }

    let phrase = 'Os itens do seu vetor são '
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
