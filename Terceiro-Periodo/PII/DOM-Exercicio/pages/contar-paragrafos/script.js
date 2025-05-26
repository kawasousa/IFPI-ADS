import { aplicarTamanhoSalvo } from "../../utils/tamanho-texto";

const dParagrafos = document.getElementById("paragrafos");

const bResultado = document.getElementById("btnResultado");
const pResultado = document.getElementById("pResultado");

bResultado.addEventListener("click", () => {
    pResultado.innerText = "Quantidade de parágrafos: " + dParagrafos.getElementsByTagName("p").length;
});

window.addEventListener('DOMContentLoaded', aplicarTamanhoSalvo);