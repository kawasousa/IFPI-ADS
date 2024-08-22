import { question } from "readline-sync";
import { stringToArray } from "./vector_utils.js";

export function getNumber(message = '----------\nDigite um numero da opcao: '){
    return Number(question(message))
}

export function getPositiveNumber(message = 'Digite um número positivo: '){
    const number = Number(question(message))
    
    if(number <= 0){
        console.log(`${number} não é um número positivo!`)
        getPositiveNumber(message)
    }
    
    return number
}

export function getNegativeNumber(message = 'Digite um número negativo: '){
    number = Number(question(message))
    
    if(number > 0){
        console.log(`${number} não é um número negativo!`)
        getNegativeNumber(message)
    }
    
    return number
}

export function getNumberInRange(min, max, message = `Digite um número entre ${min} e ${max}`){
    number = Number(question(message))
    
    if(number < min || number > max){
        console.log(`${number} está fora do alcance definido!`)
        getNumberInRange(message)
    }
    
    return number
}

export function getRandomNumberInRange(min, max){
    return Math.floor((Math.random() * (max-min) + min))
}

export function showTitle(text){
    console.clear()
    console.log(`---------- ${text} -------\n`)
}

export function divideLines(){
    console.log('\n----------')
}

export function awaitEnter(message = 'Pressione ENTER para voltar ao Menu Principal.'){
    divideLines()
    question(message)
}

export function isNumberInRange(number, min, max){
    return number > min && number < max
}

export function getText(message = ''){
    return question(message)
}