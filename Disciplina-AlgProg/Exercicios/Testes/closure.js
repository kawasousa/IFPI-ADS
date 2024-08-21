import {readFileSync, writeFile} from 'fs'

//Show the itens of a received list
function showItens(collection, title){
    console.log(`>> ${title}:`)
    for(let index of collection){
        console.log(index)
    }
}


//Generate a rangm number in range minimum to maximum
function getRandomNumber(minimum, maximum){
    const number = Math.floor((Math.random() * (maximum+1 - minimum)) + minimum)

    return number
}

//Generate a list of 'length' numbers in range minimum to maximum
function generateList(length, minimum, maximum){
    let list = []

    for(let index = 0; index < length; index++){
        list.push(getRandomNumber(minimum, maximum))
    }

    return list
}

//Return a list with the received list numbers that are even
function filterEvenNumbers(list){
    let evenNumbers = []

    for(let index of list){
        if(index % 2 != 0){
            evenNumbers.push(index)
        }
    }

    return evenNumbers
}

//Return a new list with the received collection itens that of a criterion
function filter(collection, criterion){
    let newList = []

    for(let item of collection){
        if(criterion(item)){
            newList.push(item)
        }
    }

    return newList
}

// Return a list with the doubled itens of the received collection
function doubleNumbers(numbers){
    let newNumbers = []

    for(let number of numbers){
        newNumbers.push(doubleNumber(number))
    }

    return newNumbers
}

//Return the number * 2
function doubleNumber(number){
    return number * 2
}

//Translate the itens of a collection based on a received function
function duolingo(list, func){
    const newList = []

    for(let item of list){
        newList.push(func(item))
    }

    return newList
}

function isIn(collection, number){
    for(let item of collection){
        if(item == number){
            return true
        }
    }

    return false
}

//Show the times of number 10 is selected
function show10aparitions(collection){
    let aparitions = readFileSync('data.txt', 'utf-8')
    aparitions = Number(aparitions)
    if(isIn(collection, 10)){
        aparitions += 1
    }
    aparitions = String(aparitions)

    writeFile('data.txt', aparitions, (err)=>{console.log('')})

    showItens([aparitions], 'Vezes que o número 10 apareceu')
}

function main(){
    console.clear()

    const numbers = generateList(8, 1, 10)
    showItens(numbers, 'Numeros')

    show10aparitions(numbers)

    const evenNumbers = filterEvenNumbers(numbers)
    showItens(evenNumbers, 'Ímpares')

    const doubles = duolingo(numbers, doubleNumber)
    showItens(doubles, 'Numeros Dobrados')

}
main()