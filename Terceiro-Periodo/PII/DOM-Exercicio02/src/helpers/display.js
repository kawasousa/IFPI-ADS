import { getElement } from "./getters.js";

export function exibirErro(container, milliseconds = 1000){
    container.classList.remove("oculto");
    setTimeout(()=>{container.classList.add("oculto")}, milliseconds);
}

export function exibirConteudo(container, conteudo){
    if(conteudo.trim() !== ""){
        container.innerHTML = conteudo;
    }
    else{
        const errorContainer = getElement("div", "oculto", "mensage-erro")
        errorContainer.innerText = "o campo deve ser preenchido";
        container.appendChild(errorContainer);
        
        exibirErro(errorContainer);
        setTimeout(()=>{errorContainer.remove()}, 1000);
    }
}