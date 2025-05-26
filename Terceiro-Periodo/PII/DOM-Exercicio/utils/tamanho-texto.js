export function alterarTamanho(novoTamanho) {
    document.body.style.fontSize = novoTamanho + 'px';
    localStorage.setItem('tamanhoFonte', novoTamanho);
}

export function aumentarTexto() {
    let tamanhoAtual = parseFloat(getComputedStyle(document.body).fontSize);
    tamanhoAtual += 1;
    alterarTamanho(tamanhoAtual);
}

export function diminuirTexto() {
    let tamanhoAtual = parseFloat(getComputedStyle(document.body).fontSize);
    tamanhoAtual -= 1;
    alterarTamanho(tamanhoAtual);
}

export function resetarTexto() {
    alterarTamanho(16);
}

export function aplicarTamanhoSalvo() {
    console.log("tamanho salvo");
    
    const tamanhoSalvo = localStorage.getItem('tamanhoFonte');
    if (tamanhoSalvo) {
        document.body.style.fontSize = tamanhoSalvo + 'px';
    }
}