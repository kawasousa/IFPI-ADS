export default class Calculadora{
    protected _operando1: number;
    protected _operando2: number;

    public constructor(operando1: number, operando2: number){
        this._operando1 = operando1;
        this._operando2 = operando2;
    }

    public Soma(): number{
        return this._operando1 + this._operando2;
    }
}
