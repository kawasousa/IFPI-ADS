export function addOnClick(button, listerner){
    button.addEventListener("click", listerner);
}

export function addOnChange(element, listerner){
    element.addEventListener("change", listerner);
}