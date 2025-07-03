import { obter, criar, addOnClick } from "../../helpers/dom-helpers.js";
import { ListaTarefas, Tarefa } from "../../helpers/todo-helpers.js";


const formAdicionarTarefa = obter("form-adicionarTarefa");
const inputDescricaoTarefa = obter("input-descricaoTarefa");
const tbodyTarefas = obter("tbody-tarefas");

const listaTarefas = new ListaTarefas();

formAdicionarTarefa.addEventListener("submit", adicionarTarefa);

function adicionarTarefa(event) {
    event.preventDefault();
    if (inputDescricaoTarefa.value <= 0) { return };

    const trow = criar("tr");
    const cellID = criar("th");
    const cellDescricao = criar("th");
    const cellDataInicio = criar("th");
    const cellDataFim = criar("th");
    const cellAcoes = criar("th");

    const id = `tarefa-${tbodyTarefas.children.length}`;
    const descricao = inputDescricaoTarefa.value;

    const tarefa = new Tarefa(id, descricao);
    cellID.textContent = tarefa.id.slice(7);
    cellDescricao.textContent = tarefa.descricao;
    cellDataInicio.textContent = tarefa.dataInicio;
    
    cellDataFim.textContent = tarefa.dataFim;
    cellDataFim.id = `dataFim-${id}`;

    const btnExcluirTarefa = criar("button", "excluirBtn");
    btnExcluirTarefa.textContent = "Excluir"
    addOnClick(btnExcluirTarefa, function () { excluirTarefa(trow.id) });

    const btnConcluirTarefa = criar("input", "concluirBtn");
    btnConcluirTarefa.setAttribute("type", "checkbox");
    btnConcluirTarefa.textContent = "Concluir";
    addOnClick(btnConcluirTarefa, function () { alterarConclusaoTarefa(trow.id) });

    cellAcoes.append(btnExcluirTarefa, btnConcluirTarefa);

    trow.id = id;
    listaTarefas.adicionar(tarefa);
    trow.append(cellID, cellDescricao, cellDataInicio, cellDataFim, cellAcoes);
    tbodyTarefas.appendChild(trow);
    formAdicionarTarefa.reset();
}

function excluirTarefa(id) {
    const LinhaTarefa = obter(id);
    listaTarefas.remover(id);
    LinhaTarefa.remove();
}

function alterarConclusaoTarefa(id) {
    const trow = obter(id);
    const tarefa = listaTarefas.tarefas.find(tarefa => tarefa.id === id);
    const cellDataFim = obter(`dataFim-${id}`);

    tarefa.alterarConclusao();
    trow.classList.toggle("concluida");
    cellDataFim.textContent = tarefa.dataFim;    

    // tbodyTarefas.replaceChildren([])
    listaTarefas.organizar();
    listaTarefas.forEach(row =>{
        tbodyTarefas.appendChild(row);
    })
}