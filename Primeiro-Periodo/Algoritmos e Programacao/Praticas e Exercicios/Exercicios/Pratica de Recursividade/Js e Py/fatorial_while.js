import { question } from "readline-sync";

function GetFactorial(){
    let factorial = 1;
    const number = GetNumber("Digite o numero: ");
    let multiplier = number;

    while(multiplier > 0){
        factorial *= multiplier;
        multiplier--;
    }
    
    DivideLines();
    console.log(`Fatorial de ${number}: ${factorial}.`)
}

function GetFibonacci(){
    const length = GetNumber("Digite o tamanho da sequencia: ");
    let fibonacci = [1,1];

    let index = 2;
    while(index < length){
        const newNumber = fibonacci[index-1]+fibonacci[index-2];
        fibonacci.push(newNumber);

        index++;
    }

    DivideLines();
    let number = 0;
    while(number < fibonacci.length){
        console.log(`-> ${fibonacci[number]}`);

        number++;
    }
}

function GetSequence(){
    const startNumber = GetNumber("Digite o numero inicial da sequencia: ");
    const endNumber = GetNumber("Digite o numero final da sequencia: ");

    let index = startNumber;
    while(index < endNumber){
        console.log(`-> ${index}`);
        index++;
    }
}

function Multiply(){
    const product1 = GetNumber("Digite o primeiro produto: ");
    const product2 = GetNumber("Digite o segundo produto: ");
    let result = 0;

    let index = 0;
    while(index < product2){
        result += product1;

        index++;
    }

    DivideLines();
    console.log(`Resultado da multiplicacao: ${result}`);
}

function GetExponentiation(){
    const base = GetNumber("Digite a base da expoenciacao: ");
    const exponent = GetNumber("Digite o expoente do numero: ");
    let result = 1;

    let number = 0;
    while(number < exponent){
        result *= base;
        number++;        
    }

    console.log(result);
}

function GetRandomVector(){
    const min = GetNumber("Digite o valor minimo para os numeros gerados: ");
    const max = GetNumber("Digite o valor maximo para os numeros gerados: ");
    const length = GetNumber("Digite o tamanho do vetor: ");
    const vector = [];

    let index = 0;
    while(index < length){
        const number = Math.floor((Math.random() * (max - min)) + min);
        vector.push(number);
        index++;
    }

    let indx = 0;
    let sum = 0;
    while(indx < length){
        const item = vector[indx];
        sum += item;
        indx++;
    }

    console.log(`Somatorio: ${sum}`);
}

function CountVowelsAndConsonant(){
    const phrase = question("Digite a frase: ").toUpperCase();
    let vowelsCount = 0;
    let consonantsCount = 0;
    

    let index = 0;
    while(index < phrase.length){
        const letter = phrase[index];
        const letterCode = letter.charCodeAt(0);

        if(letterCode >= 65 && letterCode <= 90){
            if(letterCode == 65 || letterCode == 69 || letterCode == 73 || letterCode == 79 ||  letterCode == 85){
                vowelsCount += 1;
            }
            else{
                consonantsCount += 1;
            }
        }

        index++;
    }

    DivideLines();
    console.log(`Vogais: ${vowelsCount}; Consoantes: ${consonantsCount}`)
}

//--------------------------------------------------------------

function ShowOptions(options){
    console.clear();

    let index = 0;
    while(index < options.length){
        const option = options[index];
        if(index != options.length-1){
            console.log(`[${index+1}] - ${option}`);
        }
        else{
            console.log(`[0] - ${option}`);
        }

        index++;
    }
}

function GetNumber(message){
    DivideLines();    
    return Number(question(message));
}

function DivideLines(){
    console.log('-'.repeat(10));
}

function AwaitEnter(){
    DivideLines();
    question("Aperte ENTER para continuar");
}

//--------------------------------------------------------------

function main(){    
    const options = ['Calcular Fatorial','Sequecia de Fibonacci','Sequencia de numeros','Multiplicacao','Exponenciacao','Vetor Aleatorio','Contar Vogais e Consoantes','Sair'];
    const functions = [GetFactorial, GetFibonacci, GetSequence,Multiply,GetExponentiation,GetRandomVector,CountVowelsAndConsonant];

    ShowOptions(options);
    let option = GetNumber("Digite a opcao: ");

    while(option != 0){
        if(option > 0 || option < options.length+1){
            functions[option-1]();
            AwaitEnter();
        }

        ShowOptions(options);
        option = GetNumber("Digite a opcao: ");
    }

}
main();