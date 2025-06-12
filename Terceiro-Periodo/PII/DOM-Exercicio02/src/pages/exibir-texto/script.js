import { exibirConteudo } from "../../helpers/display.js";
import { addOnClick } from "../../helpers/dom-helpers.js";
import { get } from "../../helpers/getters.js";

const botaoExibir = get("button-botao-exibir");
addOnClick(botaoExibir, ()=>{exibirConteudo(divConteudo, inputTexto.value)});

const inputTexto = get("input-caixa-de-texto");
const divConteudo = get("div-conteudo");