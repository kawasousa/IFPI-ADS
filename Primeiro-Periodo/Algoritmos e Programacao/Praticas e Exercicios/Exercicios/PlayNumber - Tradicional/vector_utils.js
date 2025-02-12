import { getVectorSize, isInVector } from "./vector_functions.js"

//Return a array with the itens changed based on criterion
export function mapear(colection, criterion){
    let newList = []

    for(let item of colection){
        newList = addToVector(criterion(item), newList)
    }

    return newList
}

//returns a new array with the items from the received array that meet the received criterion
export function filtrar(colection, criterion){
    const newList = []

    for(let item of colection){
        if(criterion(item)){
            newList = addToVector(item, newList)
        }
    }

    return newList
}

//Return a new array with the items of 
export function sumVectors(vector1, vector2){
    let newList = []

    for(let item of vector1){
        newList = addToVector(item, newList)
    }

    for(let item of vector2){
        newList = addToVector(item, newList)
    }

    return newList
}

//Return the received array with the received item added
export function addToVector(item, vector){
    const newVector = vector
    newVector.push(item)
    return newVector
}

//Return the same vector received but without the received item
export function removeFromVector(item, vector){
    let newList = []

    for(let index of vector){
        if(index !== item){
            newList = addToVector(index, newList)
        }
    }

    return newList
}

export function isPositive(item){
    return item >= 0
}

export function stringToArray(text = '[]'){
    const vector = []

    let numberAsString = ''
    for(const item of text){
        if(item == ','){
            const number = Number(numberAsString)
            addToVector(number, vector)
            numberAsString = ''
            continue
        }

        numberAsString += item
    }

    return vector
}

export function arrayToString(vector){
    let fileOut = ''
    
    for(let item of vector){
        fileOut += item + ','
    }

    return fileOut
}

export function getIndexVector(vector){
    const indexVector =  []

    for(let index = 0; index <= getVectorSize(vector); index++){
        indexVector.push(index)
    }

    return indexVector
}

export function multiplyValues(vector, multiplier){
    const newVector = []
    
    for(let item of vector){
        const multiplied = item * multiplier
        newVector.push(multiplied)
    }

    return newVector
}

export function exponentiateValues(vector, exponent){
    for(let item of vector){
        item **= exponent
    }

    return vector
}