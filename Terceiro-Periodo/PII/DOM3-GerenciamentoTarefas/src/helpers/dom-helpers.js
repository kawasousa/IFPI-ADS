export function obter(id){
    return document.getElementById(id);
}

export function criar(tag, ...classes){
    const element = document.createElement(tag);
    for(const className of classes){
        element.classList.add(className);
    }

    return element;
}

export function obterData(){
    const dataAtual = new Date().toLocaleDateString("pt-BR").split("/");
    const dia = dataAtual[0];
    const mes = dataAtual[1];
    const ano = dataAtual[2];
    const dataObjeto = new Date(ano, mes-1, dia);

    const horaAtual = new Date().toLocaleTimeString("pt-BR").slice(0,5);

    const formatadorMes = new Intl.DateTimeFormat("pt-BR",{month: "long"});
    const nomeMes = formatadorMes.format(dataObjeto);

    return `${dia} de ${nomeMes} às ${horaAtual}`;
}

export function addOnClick(element, listener){
    element.addEventListener("click", listener);
}