import {question} from 'readline-sync'

function main(){

    const frase = question("Digite um nome: ")
    let novaFrase = ""

    for(let letra = frase.length-1; letra >= 0; letra--){
        novaFrase += frase[letra]
    }

    // let novaFrase = removerEspacos(frase)
    console.log(novaFrase)

}

function removerEspacos(frase){
    let novaFrase = ""

    for(let letra of frase){
        if(letra != " "){
            novaFrase += letra
        }
    }
    return novaFrase
}

function fraseCaixaAlta(frase){
    let novaFrase = ""

    for(let indice = 0; indice < frase.length; indice++){
         
    }

    return novaFrase
}

main()