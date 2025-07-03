import { get, getElement } from "../../helpers/getters.js"
import { addOnClick } from "../../helpers/dom-helpers.js"

const inputNovaHashtag = get("input-nova-hashtag");
const selectHashtags = get("select-hashtags");
const botaoAdicionarHashtag = get("button-adicionar-hashtag");

addOnClick(botaoAdicionarHashtag, adicionarHashtag);

function adicionarHashtag(){
    const titulo = inputNovaHashtag.value;
    const iguais = [...selectHashtags.children].filter(option => option.value === titulo);

    if(titulo.length > 2 && iguais.length === 0 && selectHashtags.children.length<5){
        
        const nova = getElement("option");
        nova.value = titulo;
        nova.innerText = titulo;

        selectHashtags.appendChild(nova);
    }
}