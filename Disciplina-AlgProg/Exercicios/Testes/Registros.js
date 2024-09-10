import { question } from "readline-sync";

/*
Matrizes -> Vetor de Vetor
*/

function AddAluno(list){
    let aluno = {}

    aluno["matricula"] =  question()
    aluno["nome"] = question()
    aluno["endereco"] = {}
    aluno["endereco"]["logradouro"] = Number(question())
    aluno["endereco"]["rua"] = question()

    list.push(aluno)
}

function main(){
    const alunos = []
    AddAluno(alunos)
}
main();