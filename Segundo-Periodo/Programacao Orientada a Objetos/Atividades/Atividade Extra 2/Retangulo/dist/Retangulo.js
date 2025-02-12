"use strict";
class Retangulo {
    /*
    Construtor: método que inicializa o objeto.

    A classe Retangulo poderia ser classificada sem um construtor e com os
    atributos públicos, porém não é indicado que atributos
    sejam públicos, e sim que métodos internos (os Getters e Setters) manipulem esses atributos.
    */
    constructor(tamanhoLado1, tamanhoLado2) {
        this.tamanhoLado1 = tamanhoLado1;
        this.tamanhoLado2 = tamanhoLado2;
    }
    //Método público que retorna a área do retângulo.
    CalcularArea() {
        return this.tamanhoLado1 * this.tamanhoLado2;
    }
    //Método público que retorna o perímetro do retângulo.
    CalcularPerimetro() {
        return this.tamanhoLado1 * 2 + this.tamanhoLado2 * 2;
    }
    // Retorna se o retângulo é um quadrado
    EhQuadrado() {
        return this.tamanhoLado1 === this.tamanhoLado2;
    }
}
