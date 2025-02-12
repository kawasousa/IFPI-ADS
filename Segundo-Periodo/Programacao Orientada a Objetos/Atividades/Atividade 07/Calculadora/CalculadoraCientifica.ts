import Calculadora from "./Calculadora";

export default class CalculadoraCientifica extends Calculadora{
    public Exponenciar(){
        return this._operando1 ** this._operando2;
    }
}