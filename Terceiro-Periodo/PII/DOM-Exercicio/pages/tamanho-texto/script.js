import { aplicarTamanhoSalvo, aumentarTexto, diminuirTexto, resetarTexto } from "../../utils/tamanho-texto.js";

const btnDiminuirTamanho = document.getElementById("btnDiminuirTamanho");
const btnAumentarTamanho = document.getElementById("btnAumentarTamanho");
const btnResetarTamanho = document.getElementById("btnResetarTamanho");

btnDiminuirTamanho.addEventListener("click", diminuirTexto);
btnResetarTamanho.addEventListener("click", resetarTexto);
btnAumentarTamanho.addEventListener("click", aumentarTexto);

window.addEventListener('DOMContentLoaded', aplicarTamanhoSalvo);