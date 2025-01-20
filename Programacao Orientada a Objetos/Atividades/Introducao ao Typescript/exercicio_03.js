// Questão 01
function IsEven(n) {
    return n % 2 == 0;
}
//Questão 02
function ShowGreeting(nome, pronome) {
    if (pronome === void 0) { pronome = "Sr."; }
    console.log("".concat(pronome, " ").concat(nome));
}
//Questão 03
function GetNumbers(array) {
    var numbers = "";
    array.forEach(function (x) {
        if (x != array[array.length - 1]) {
            numbers += "".concat(x, "-");
        }
        else {
            numbers += "".concat(x);
        }
    });
    return numbers;
}
//Questão 04
function soma(x, y) {
    return x + y;
}
// console.log(soma(1,2)) // retorna o número 3
// console.log(soma(1,"2")) // retorna a string 12
// console.log(soma(1)) // retorna a NaN
//Questão 05
function exibir() {
    var numeros = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numeros[_i] = arguments[_i];
    }
    var texto = "";
    numeros.forEach(function (x) { texto += x; });
    console.log(texto);
}
// exibir("a","b")
// exibir("a","b","c")
// exibir("a","b","c","d")
//Questão 06
var ola = function () { console.log("ola"); };
// Questão 07
var array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15];
var pares = array.filter(function (x) { return x % 2 == 0; });
// Questão 08
var dobrados = array.map(function (x) { return x * 2; });
var somaDosElementos = dobrados.reduce(function (acc, curr) { return acc + curr; }, 0);
console.log(somaDosElementos);
