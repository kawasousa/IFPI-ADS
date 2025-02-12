import Conta from "./Conta.js";
export default class Poupanca extends Conta {
    constructor(numero, saldo, taxaDeJuros) {
        super(numero, saldo);
        this._taxaDeJuros = taxaDeJuros;
    }
    renderJuros() {
        let juros = this.saldo * this._taxaDeJuros / 100;
        this.depositar(juros);
    }
}
//# sourceMappingURL=Poupanca.js.map