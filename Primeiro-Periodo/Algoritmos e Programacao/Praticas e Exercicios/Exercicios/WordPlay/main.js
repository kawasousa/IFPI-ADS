import { question } from 'readline-sync'; 
import {readFileSync} from 'fs';


//Exercício 9.1
function showWordGreaterThan(number, archive = "words.txt"){
    console.clear()
    const lines = getDataLines(archive)

    for(let line of lines){
        line = line.trim()
        let word = getSlicedWord(line)
        let wordLen = word.length
    
        if(wordLen >= number){
            console.log("Palavra com %s letras: %s", wordLen, line)
        }
    }
}

//Exercício 9.2
function hasNoE(word){
    for(let letter of word){
        if(letter == 'e'){
            return false
        }
    }

    return true
}

//Exercício 9.3
function avoids(word, avoidedLetters){
    word = wordToUpperCase(word)
    avoidedLetters = wordToUpperCase(avoidedLetters)
    avoidedLetters = getSlicedWord(avoidedLetters)
    let avoided = notRepeatedIndex(avoidedLetters)

    for(let letter of word){
        for(let index of avoided){
            if(letter == index){
                return false
            }
        }
    }

    return true
}

//Exercício 9.4
function usesOnly(word, usedLetters){
    usedLetters = getSlicedWord(usedLetters)
    usedLetters = notRepeatedIndex(usedLetters)

    for(let letter of word){
        if(isNotIn(letter, usedLetters)){
            return false
        }
    }

    return true
}

//Exercicio 9.5
function usesAll(word, requiredLetters){
    requiredLetters = getSlicedWord(requiredLetters)
    requiredLetters = notRepeatedIndex(requiredLetters)

    for(let letter of requiredLetters){
        if(isNotIn(letter, word)){
            return false
        }
    }

    return true
}

//Exercicio 9.6
function isAbecedarian(word){
    word = getSlicedWord(word)
    word = wordToUpperCase(word)
    let previousLetter = 65


    for(let letter of word){
        let ordLetter = letter.charCodeAt(0)
        
        if(previousLetter > ordLetter){
            return false
        }
        
        previousLetter = ordLetter
    }

    return true
}

////////////////
function getDataLines(archive = 'words.txt'){
    const data = readFileSync(archive, 'utf-8')
    let lines = data.split('\n')

    return lines
}

//Return a copy of the received string without the received character
function getSlicedWord(word, character = " "){
    let newWord = ""
    for(let letter of word){
        if(letter != character){
            newWord += letter
        }
    }

    return newWord
}

//Check if a group dont have the received letter
function isNotIn(letter, group){
    for(let index of group){
        if(index == letter){
            return false
        }
    }
    
    return true
}

//Return a new array with no repeated index
function notRepeatedIndex(repeated, group){
    let newGroup = []

    for(let index of repeated){
        if(isNotIn(index, newGroup)){
            newGroup.push(index)
        }
    }

    return newGroup
}

function wordToUpperCase(word){
    let newWord = ""
    for(let letter of word){
        let ordLetter = letter.charCodeAt(0)

        if(ordLetter >= 97 && ordLetter <= 122){
            ordLetter -= 32
            let charLetter = String.fromCharCode(ordLetter)
            newWord += charLetter
        }
        else{
            newWord += letter
        }
    }

    return newWord
}

//Show the options on screen and return the selected option
function showOptions(){
    console.clear()

    let options = `        
========== WordPlay - Joguinho das Palavras ==========

Opções:

[1] -> Palavras com mais de 20 letras
[2] -> Palavra tem E?
[3] -> Essa palavra tem as letras?
[4] -> A palavra usa apenas essas letras?
[5] -> A palavra usa todas essas letras?
[6] -> Palavra em ordem alfabética

[0] -> Sair
`
    console.log(options)
}

function getOption(){
    showOptions()

    let option = question("Digite a opcao: ")
    return option
}



function main(){
    let option = getOption()

    while(option != 0){
        if(option == 1){
            showWordGreaterThan(20)
        }
        else if(option == 2){{
            console.clear()
            let word = question("Digite uma palavra e eu direi se ela tem a letra E: ")
            let result = hasNoE(word)
            let wordResult = result ? "não tem" : "tem"
            console.log(`A palavra ${word} ${wordResult} a letra E`)
            }

        }
        else if(option == 3){
            console.clear()
            let word = question("Digite a palavra a ser analisada: ")
            let avoidedLetters = question(">>Agora digite as letras proibidas: ")

            let hasAvoidedLetter = avoids(word, avoidedLetters) ? "não tem" : "tem"
            console.log(`\nA palavra ${word} ${hasAvoidedLetter} as letras digitadas!`)
        }
        else if(option == 4){
            console.clear()
            let word = question("Qual a palavra analisada?\n ")
            let letters = question("\nAgora digite as letras: ")
            
            let usesOnlyThisLetters = usesOnly(word, letters) ? "usa apenas" : "não usa apenas"
            console.log(`\nA palavra ${word} ${usesOnlyThisLetters} as letras digitadas`)
        }
        else if(option == 5){
            console.clear()
            let word = question("Digite a palavra a ser analisada: ")
            let letters = question(">>Agora digite as letras: ")
            
            let usesAllThisLetters = usesAll(word, letters) ? "usa todas" : "não usa todas"
            console.log(`A palavra ${word} ${usesAllThisLetters} as letras digitadas`)
        }
        else if(option == 6){
            console.clear()
            let word = question("Digite a palavra a ser analisada: ")
            let isAbc = isAbecedarian(word) ? "está" : "não está"
            console.log(`A palavra ${word} ${isAbc} em ordem alfabética!`)
        }
        
        
        question("----------\nPressione ENTER para prosseguir")
        option = getOption()
    }

    console.log("\n========== Fim ==========")

}

main()