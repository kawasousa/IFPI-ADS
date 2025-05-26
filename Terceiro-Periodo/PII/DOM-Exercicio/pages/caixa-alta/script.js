import { aplicarTamanhoSalvo } from "../../utils/tamanho-texto";

const input_lower_case = document.getElementById("input-lower-case");
const input_upper_case = document.getElementById("input-upper-case");

const copy_buttons = document.getElementsByClassName("copy-button");
const paste_buttons = document.getElementsByClassName("paste-button");


input_lower_case.addEventListener("input", (event)=>{
    input_upper_case.value = event.target.value.toUpperCase();
    input_lower_case.value = input_lower_case.value.toLowerCase();
})

input_upper_case.addEventListener("input", (event)=>{
    input_upper_case.value = input_upper_case.value.toUpperCase()
    input_lower_case.value = event.target.value.toLowerCase();
})

/* BOTÕES DE COPIAR E COLAR */
for(const button of copy_buttons){
    const input = button.previousElementSibling;

    button.addEventListener("click", ()=>{    
        navigator.clipboard.writeText(input.value);
    })
}

for(const button of paste_buttons){
    const input = button.nextElementSibling;

    button.addEventListener("click", ()=>{
        navigator.clipboard.readText().then(text => input.value = text);
    })
}
window.addEventListener('DOMContentLoaded', aplicarTamanhoSalvo);