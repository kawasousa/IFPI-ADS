import { obterData } from "./dom-helpers.js";

export class Tarefa {
    id;
    descricao;
    dataInicio;
    dataFim;

    constructor(id, descricao) {
        this.id = id;
        this.descricao = descricao;
        this.dataInicio = obterData();
        this.dataFim = "--";
    }

    alterarConclusao(){
        if(this.dataFim === "--"){
            this.dataFim = obterData();
        }
        else{
            this.dataFim = "--"
        }
    }
}

export class ListaTarefas {
    tarefas;

    constructor() {
        this.tarefas = [];
    }

    adicionar(tarefa) {
        this.tarefas.push(tarefa);
    }

    remover(id) {
        this.tarefas = this.tarefas.filter(tarefa => tarefa.id !== id);
    }

    organizar(){
        this.tarefas.sort(function(a, b){
            return a.dataFim==="" && b.dataFim!==""? 1: 0
        })
    }
}