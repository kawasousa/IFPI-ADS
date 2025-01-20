import Conta from "./Conta.js";
export default class ContaImposto extends Conta {
    constructor() {
        super(...arguments);
        this._taxaDeImposto = 0.38 / 100;
    }
    sacar(valor) {
        let imposto = valor * this._taxaDeImposto;
        let totalSaque = valor + imposto;
        super.sacar(totalSaque);
    }
}
//# sourceMappingURL=ContaImposto.js.map