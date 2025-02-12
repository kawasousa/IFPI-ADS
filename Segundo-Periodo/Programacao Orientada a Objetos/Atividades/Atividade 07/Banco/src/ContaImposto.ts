import Conta from "./Conta.js"

export default class ContaImposto extends Conta {
    private _taxaDeImposto: number = 0.38/100;

    public sacar(valor: number): void {
        let imposto: number = valor * this._taxaDeImposto;
        let totalSaque: number = valor + imposto;
        super.sacar(totalSaque);
    }
}