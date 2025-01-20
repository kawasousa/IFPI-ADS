import Calculadora from "./Calculadora";
import CalculadoraCientifica from "./CalculadoraCientifica"

function TesteCalculadora(){
    const operando1: number = 200;
    const operando2: number = 300;

    const calculadora: Calculadora = new Calculadora(operando1, operando2);
    const soma = calculadora.Soma();

    console.log(soma);
}

function TesteCalculadoraCientifica(){
    const operando1: number = 4;
    const operando2: number = 2;

    const calculadoraCientifica: CalculadoraCientifica = new CalculadoraCientifica(operando1, operando2);
    const exponenciacao = calculadoraCientifica.Exponenciar();

    console.log(exponenciacao);
}