// Questão 01
function IsEven(n: number): boolean{
    return n % 2 == 0;
}

//Questão 02
function ShowGreeting(nome: string, pronome: string = "Sr."): void{
    console.log(`${pronome} ${nome}`);
}

//Questão 03
function GetNumbers(array: Array<number>): String{
    let numbers = "";
    array.forEach((x)=>{
        if(x != array[array.length-1]){
            numbers += `${x}-`;
        }
        else{
            numbers += `${x}`;
        }
    })

    return numbers;
}

//Questão 04
function soma(x: number, y?: any): number{
    return x + y;
}

console.log(soma(1,2)) // retorna o número 3
console.log(soma(1,"2")) // retorna a string 12
console.log(soma(1)) // retorna a NaN

//Questão 05
function exibir(...numeros: string[]): void{
    let texto = ""
    numeros.forEach((x)=>{texto += x});
    console.log(texto);
}

exibir("a","b")
exibir("a","b","c")
exibir("a","b","c","d")

//Questão 06
const ola = ()=>{console.log("ola")}

// Questão 07
const array = [1,2,3,4,5,6,7,8,9,10,12,13,14,15];
const pares = array.filter((x)=>{return x % 2 == 0})

// Questão 08
const dobrados = array.map((x)=>{return x*2})
const somaDosElementos: number = dobrados.reduce((acc, curr)=>{return acc + curr},0)