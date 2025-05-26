import { aplicarTamanhoSalvo } from "../../utils/tamanho-texto";

const botao = document.getElementById("botao");
const paragrafo = document.getElementById("paragrafo");

const botaoLimpar = document.getElementById("limpar");

botao.addEventListener("click", ()=>{
    paragrafo.textContent = "O texto desse parágrafo foi alterado!";
})

botaoLimpar.addEventListener("click", ()=>{
    paragrafo.textContent = "";
})

window.addEventListener('DOMContentLoaded', aplicarTamanhoSalvo);