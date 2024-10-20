class Retangulo {
    //Atributos sendo declarados como privados, conforme indicação.
    private tamanhoLado1: number;
    private tamanhoLado2: number;

    /*
    Construtor: método que inicializa o objeto.

    A classe Retangulo poderia ser classificada sem um construtor e com os
    atributos públicos, porém não é indicado que atributos
    sejam públicos, e sim que métodos internos (os Getters e Setters) manipulem esses atributos.
    */
    constructor(tamanhoLado1: number, tamanhoLado2: number) {
        this.tamanhoLado1 = tamanhoLado1;
        this.tamanhoLado2 = tamanhoLado2
    }

    //Método público que retorna a área do retângulo.
    public CalcularArea(): number {
        return this.tamanhoLado1 * this.tamanhoLado2;
    }

    //Método público que retorna o perímetro do retângulo.
    public CalcularPerimetro(): number {
        return this.tamanhoLado1*2 + this.tamanhoLado2*2;
    }
}

function main(): void{
    //Variáveis para inicialização do objeto.
    let tamanhoLado1: number = 10;
    let tamanhoLado2: number = 30;

    //objeto: classe = operador construtor.
    const retanguloExemplo: Retangulo = new Retangulo(tamanhoLado1, tamanhoLado2);

    //Uso dos métodos da classe Retangulo.
    let area: number = retanguloExemplo.CalcularArea();
    let perimetro: number = retanguloExemplo.CalcularPerimetro();

    //Saída
    console.log(`A área do retângulo é ${area}!`)
    console.log(`O perímetro do retângulo é ${perimetro}!`)
}
main()