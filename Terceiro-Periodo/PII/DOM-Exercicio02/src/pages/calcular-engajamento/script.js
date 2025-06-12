import { addOnClick } from "../../helpers/dom-helpers.js"
import { getNumberOrNull, get } from "../../helpers/getters.js";
import { exibirErro } from "../../helpers/display.js"

const inputInteracoes = get("input-numero-interacoes");
const inputVisualizacoes = get("input-numero-visualizacoes");
const divErro = get("div-mensagem-erro");
const divResultado = get("div-resultado");
const botaoCalcularEngajamento = get("button-calcular-engajamento");

addOnClick(botaoCalcularEngajamento, calcularEngajamento);

function calcularEngajamento() {
    const interacoes = getNumberOrNull(inputInteracoes.value);    
    const visualizacoes = getNumberOrNull(inputVisualizacoes.value);

    if (!interacoes || !visualizacoes){
        exibirErro(divErro);
    }
    else{
        const engajamento = (interacoes / visualizacoes) * 100;
        divResultado.innerText = `${engajamento}%`;
    }

}