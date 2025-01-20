export default class Conta {
    constructor(numero, saldo) {
        this._id = 0;
        this._numero = numero;
        this._saldo = saldo;
    }
    sacar(valor) {
        this._saldo = this._saldo - valor;
    }
    depositar(valor) {
        this._saldo = this._saldo + valor;
    }
    transferir(contaDestino, valor) {
        this.sacar(valor);
        contaDestino.depositar(valor);
    }
    get id() {
        return this._id;
    }
    set id(id) {
        this._id = id;
    }
    get numero() {
        return this._numero;
    }
    get saldo() {
        return this._saldo;
    }
    get cliente() {
        return this._cliente;
    }
    set cliente(cliente) {
        this._cliente = cliente;
    }
}
//# sourceMappingURL=Conta.js.map