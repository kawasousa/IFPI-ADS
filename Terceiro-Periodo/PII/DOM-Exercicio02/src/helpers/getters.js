export function get(id){
    return document.getElementById(id);
}

export function getElement(tag, ...classes){
    const container = document.createElement(tag);

    for(const className of classes){
        container.classList.add(className);
    }

    return container;
}

export function getNumberOrNull(value){
    if(isNaN(parseFloat(value))){
        return null;
    }

    return Number(value);
}

export function getByName(name){
    return [...document.getElementsByName(name)];
}