import { get, getByName, getElement } from "../../helpers/getters.js"
import { addOnClick } from "../../helpers/dom-helpers.js"
import { exibirErro } from "../../helpers/display.js"

const botaoEnviarSelecao = get("button-enviar-selecao");
const divMensagemErro = get("div-mensagem-erro");
const divSelecionadas = get("div-redes-selecionadas");

addOnClick(botaoEnviarSelecao, selecionarRedes);

function selecionarRedes(){
    const redesSociais = getByName("redes-sociais");
    const redesMarcadas = redesSociais.filter(rede => rede.checked === true);

    if(redesMarcadas.length === 0){
        exibirErro(divMensagemErro, 1000);
    }
    else{
        const redes = getElement("p");
        
        for(const rede of redesMarcadas){
            redes.innerText += ` ${rede.value} `;
        }

        divSelecionadas.appendChild(redes);
    }
}