import { addOnChange } from "../../helpers/dom-helpers.js"
import { get } from "../../helpers/getters.js"

const selectImagens = get("select-imagens");
const imagemEscolhida = get("img-escolhida");

addOnChange(selectImagens, escolherImagem);

function escolherImagem(event) {
    const imgSrc = event.target.value;
    imagemEscolhida.setAttribute("src", imgSrc);
}