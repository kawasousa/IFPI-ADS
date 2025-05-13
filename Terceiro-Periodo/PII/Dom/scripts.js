let h1principal = document.getElementById('principal');
h1principal.innerText = 'Aprendendo Kaio';

// let paragrafo1 = document.getElementById('paragrafo1')

let paragrafosFilhos = document.getElementById('pai').children;

let resultadoFilhos = document.getElementById('resultadoFilhos');

for (var i = 0; i < paragrafosFilhos.length; i++){
    resultadoFilhos.innerHTML += 
        "<a href = '#'>" + paragrafosFilhos[i].innerHTML + "</a> <br>"
}

/* Capturando clique */
let botao1 = document.getElementById('botao1');

botao1.addEventListener('click', () =>{
    alert('Você clicou naquele botao lá que diz pra clicar nele! Clique em ok para voltar pra página e esse alerta desaparecer')
})

function funcaoPraQuandoClicarNoBotaoDeNumeroUm(){
    alert('Voce clicou naquele botao lá que diz para clicar nele, só que dessa vez foi usada a função funcaoPraQuandoClicarNoBotaoDeUmNumeroUm')
}
botao1.addEventListener('click', funcaoPraQuandoClicarNoBotaoDeNumeroUm);

function $(id){
    return document.getElementById(id);
}

$('botao2').addEventListener('click', ()=>{
    $('resultado2').innerHTML = $('texto').value;
})

function somar(){
    let numero1 = Number($('numero1').value);
    let numero2 = Number($('numero2').value);

    let resultadoSoma = $('resultadoSoma');
    resultadoSoma.innerText = numero1 + numero2;
}

$('botaoSomar').addEventListener('click', somar);

$('cidades').addEventListener("change", ()=>{
    $("resultadoCidade").innerHTML += $('cidades').value + " ";
})

$('cor').addEventListener("change", ()=>{
    document.body.style.backgroundColor = $('cor').value;
})