import { getOption } from "./utils.js"

export function getKeysByName(table, name){
    const keys = []

    for(const data of table){
        if(data[1].toUpperCase() == name.toUpperCase()){
            keys.push(data[0])
        }
    }

    return keys
}

export function getKeyByType(table){
    const options = ['Nome','Série','Faixa de Pontos','Cores', 'Voltar']
    const option = getOption(options)

    return option
}

export function getKeysBy(table, index){
    const keys = []

    for(const data of table){
        const item = data[index]
        keys.push(item)
    }

    return keys
}