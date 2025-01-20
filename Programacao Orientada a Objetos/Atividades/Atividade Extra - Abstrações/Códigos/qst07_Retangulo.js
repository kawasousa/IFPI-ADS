var Retangulo = /** @class */ (function () {
    /*
    Construtor: método que inicializa o objeto.

    A classe Retangulo poderia ser classificada sem um construtor e com os
    atributos públicos, porém não é indicado que atributos
    sejam públicos, e sim que métodos internos (os Getters e Setters) manipulem esses atributos.
    */
    function Retangulo(tamanhoLado1, tamanhoLado2) {
        this.tamanhoLado1 = tamanhoLado1;
        this.tamanhoLado2 = tamanhoLado2;
    }
    //Método público que retorna a área do retângulo.
    Retangulo.prototype.CalcularArea = function () {
        return this.tamanhoLado1 * this.tamanhoLado2;
    };
    //Método público que retorna o perímetro do retângulo.
    Retangulo.prototype.CalcularPerimetro = function () {
        return this.tamanhoLado1 * 2 + this.tamanhoLado2 * 2;
    };
    return Retangulo;
}());
function main() {
    //Variáveis para inicialização do objeto.
    var tamanhoLado1 = 10;
    var tamanhoLado2 = 30;
    //objeto: classe = operador construtor.
    var retanguloExemplo = new Retangulo(tamanhoLado1, tamanhoLado2);
    //Uso dos métodos da classe Retangulo.
    var area = retanguloExemplo.CalcularArea();
    var perimetro = retanguloExemplo.CalcularPerimetro();
    //Saída
    console.log("A \u00E1rea do ret\u00E2ngulo \u00E9 ".concat(area, "!"));
    console.log("O per\u00EDmetro do ret\u00E2ngulo \u00E9 ".concat(perimetro, "!"));
}
main();
