import { getElement, get } from "../../helpers/getters.js"
import { addOnClick } from "../../helpers/dom-helpers.js"

const inputImagem = get("input-upload-imagem");
const botaoCarregarImagem = get("button-carregar-imagem");
const divResultado = get("div-resultado");

addOnClick(botaoCarregarImagem, mostrarImagem);

function mostrarImagem(){
    const file = inputImagem.files[0];
    const img = getElement("img");
    
    img.setAttribute("src", URL.createObjectURL(file));
    divResultado.appendChild(img);
}