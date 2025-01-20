var Circulo = /** @class */ (function () {
    function Circulo() {
    }
    Circulo.prototype.CalcularArea = function () {
        var pi = 3.14;
        return Math.pow(this.raio, 2) * pi;
    };
    Circulo.prototype.CalcularPerimetro = function () {
        var pi = 3.14;
        return 2 * pi * this.raio;
    };
    return Circulo;
}());
function main() {
    var circulo = new Circulo();
    circulo.raio = 10;
    var area = circulo.CalcularArea();
    var perimetro = circulo.CalcularPerimetro();
    //Saída
    console.log("\u00C1rea do c\u00EDrculo: ".concat(area));
    console.log("Per\u00EDmetro do c\u00EDrculo: ".concat(perimetro));
}
main();
