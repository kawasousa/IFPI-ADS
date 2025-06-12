import { addOnChange, get } from "../../helpers/dom-helpers.js"

const selectImagens = get("select-imagens");
const imagemEscolhida = get("img-escolhida");

addOnChange(selectImagens, escolherImagem);

function escolherImagem(event){
    const imgSrc = event.target.value;
    imagemEscolhida.setAttribute("src", imgSrc);
}