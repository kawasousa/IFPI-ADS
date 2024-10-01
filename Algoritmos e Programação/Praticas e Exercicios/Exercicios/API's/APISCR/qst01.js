import { question } from "readline-sync";

function main(){
    let idade = Number(question("Digite a idade do cliente: "))
    let clientes = 0

    while((idade > 0) || (idade == 0 && quartoAtual > 0)){
        if(idade > 0){
            clientes++
        }

        if(idade == 0 || quartoAtual == 4){
            console.log("Novo Quarto")
            clientes = 0
        }

        idade = Number(question("Digite a idade do cliente: "))
    }

    console.log("-"*30)
    console.log("Fim da aplicação")
}

main();