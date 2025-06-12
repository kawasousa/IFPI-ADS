function $(id){return document.getElementById(id);}

function getBotalClicavel(id, funcao){
    $(id).addEventListener("click", funcao);
    return $(id);
}

const botaoCriarParagrafo = getBotalClicavel("botaoCriarParagrafo", criarParagrafo);

function criarParagrafo(){
    const p1 = document.createElement("p");
    p1.innerText = "Salut!";
    p1.id = "p1";

    $("resultado1").appendChild(p1);
}

const botaoCriarElemento = getBotalClicavel("botaoCriarElemento", criarElemento);

function criarElemento(){
    const tagElemento = $("tagElemento").value;

    const elemento = document.createElement(tagElemento);

    elemento.id = $("id").value;
    elemento.innerText = $("texto").value;

    elemento.setAttribute($("atributo").value, $("valor").value);

    const pai = $("resultado2");

    pai.appendChild(elemento);
}

const botaoAdicionarTarefa = getBotalClicavel("botaoAdicionarTarefa", adicionarTarefa);

let contador = 1;
function adicionarTarefa(){
    const descricao = $("descricao").value;
    const percentual = $("percentual").value;

    const tr = document.createElement("tr");
    tr.id = contador;

    const tdContador = document.createElement("td");
    tdContador.innerText = contador;

    const tdDescricao = document.createElement("td");
    tdDescricao.innerText = descricao;

    const tdPercentual = document.createElement("td");
    tdPercentual.innerText = percentual+ "%";

    const tdAcoes = document.createElement("td");
    
    const botaoExcluir = document.createElement("button");
    botaoExcluir.addEventListener("click", ()=>{tr.remove()})
    botaoExcluir.innerText = "Excluir";
    tdAcoes.appendChild(botaoExcluir);

    tr.appendChild(tdContador);
    tr.appendChild(tdDescricao);
    tr.appendChild(tdPercentual);
    tr.appendChild(tdAcoes);

    contador++;
    $("tarefas").appendChild(tr);
}