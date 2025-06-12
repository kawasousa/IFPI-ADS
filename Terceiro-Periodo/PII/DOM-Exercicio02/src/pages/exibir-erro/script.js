import { exibirErro } from "../../helpers/display.js";
import { addOnClick } from "../../helpers/dom-helpers.js";
import { get } from "../../helpers/getters.js"

const mensagemErro = get("div-mensagem-erro");
const botaoErro = get("button-erro");
addOnClick(botaoErro, ()=>{exibirErro(mensagemErro, 3000)});