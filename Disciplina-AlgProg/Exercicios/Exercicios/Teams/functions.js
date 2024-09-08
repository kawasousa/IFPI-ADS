import { getKeyByType, getKeysBy, getKeysByName } from "./func_utils.js"
import { awaitEnter, divideLines, getNumber, getString, getVector, showTitle } from "./utils.js"

export function createTeam(table){
    showTitle('Adiconar Time')

    const data = []

    const key = table.length
    const name = getString('Digite o nome do time: ')
    const division = getString(`Qual a Série do time ${name}: `).toUpperCase()
    const points = getNumber(`Quantos pontos o time ${name} tem na Série ${division}: `)
    const colors = getVector('Quantas cores tem o time: ', 'Digite uma cor: ')

    data.push(key, name, division, points, colors)
    table.push(data)
}

export function showTeams(table){
    console.log(`Time\t| Série\t| Pontos`)
    divideLines()
    for(const data of table){
        const name = data[1]
        const division = data[2]
        const points = data[3]
        
        console.log(`${name}\t| ${division}\t| ${points}`)
    }
}

export function updateTeam(table){

}

export function deleteTeam(table){
    showTitle('Deletar um time')

    const option = getKeyByType(table)
    let keys = []

    switch(option){
        case 1:
            const name = getString('Digite o nome do time: ')
            keys = getKeysBy(table, 1)
        case 2:
            const division = getString('Digite a Série a qual esse time pertence: ')
            keys = getKeysBy(table, 2)
    }

    for(const key of keys){
        table.splice(key, 1)
    }
}

export function showTeamData(table, keys){
    const data = table[key]
    showTeams([data])
}

export function searchTeams(table){
    showTitle('Buscar Times Por')
    
    let name = ''
    let keys = []

    const option = getKeyByType(table)

    switch(option){
        case 1:
            name = getString('Digite o nome do time: ')
            keys = getKeysByName(table, name)
            console.clear()
            showTeams(table, keys)
            break
        
    }
}
