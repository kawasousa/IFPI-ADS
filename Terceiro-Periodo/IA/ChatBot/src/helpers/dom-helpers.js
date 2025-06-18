export function createElement(tag, ...classes){
    const element = document.createElement(tag);
    for(const className of classes){
        element.classList.add(className);
    }

    return element;
}

export function addOnSubmit(element, listener){
    element.addEventListener("submit", listener);
}

export function addOnChange(element, listener){
    element.addEventListener("change", listener);
}

export function addOnClick(element, listener){
    element.addEventListener("click", listener);
}

export function createQueryContainer(text){
    const messageField = createElement("div", "div-message-field", "div-message-field-query");
    const message = createElement("div", "div-message", "div-message-query");
    const textField = createElement("p");

    textField.textContent = text;
    message.appendChild(textField);
    messageField.appendChild(message);

    return messageField;    
}