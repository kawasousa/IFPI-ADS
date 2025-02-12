import { createTeam, deleteTeam, searchTeams, showTeams } from "./functions.js"
import { awaitEnter, divideLines, getOption, showTitle } from "./utils.js"


function main(){
    let table = []
    const options = ['Adicionar time', 'Mostrar tabela', 'Buscar time', 'Deletar time','Sair']
    showTitle('Times')
    
    let option = getOption(options)
    divideLines()
    
    while(option != 0){
        console.clear()
        
        switch(option){
            case 1:
                createTeam(table)
                awaitEnter()
                break
            case 2:
                showTeams(table)
                awaitEnter()
                break
            case 3:
                searchTeams(table)
                awaitEnter()
                break
            case 4:
                deleteTeam(table)
                awaitEnter()
                break
        }
        
        showTitle('Times')
        option = getOption(options)
    }

    console.log('Fim.')
}
main()