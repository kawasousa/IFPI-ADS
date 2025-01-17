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

    // Retorna se o retângulo é um quadrado
    public EhQuadrado(): boolean{
        return this.tamanhoLado1 === this.tamanhoLado2;
    }
}