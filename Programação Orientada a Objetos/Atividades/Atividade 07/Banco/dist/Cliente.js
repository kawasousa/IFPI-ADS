import Conta from "./Conta.js";
export default class Cliente {
    constructor(nome, cpf, dataNascimento) {
        this._id = 0;
        this._nome = nome;
        this._cpf = cpf;
        this._dataNascimento = dataNascimento;
        this._contas = [];
    }
    set id(id) {
        this._id = id;
    }
    get nome() {
        return this._nome;
    }
    get cpf() {
        return this._cpf;
    }
    adicionarConta(contaProcurada) {
        this._contas.push(contaProcurada);
    }
    listarCopiaContas() {
        let copiaContas = [];
        for (let conta of this._contas) {
            let contaCopiada = new Conta(conta.numero, conta.saldo);
            contaCopiada.id = conta.id;
            contaCopiada.cliente = conta.cliente;
            copiaContas.push(contaCopiada);
        }
        return copiaContas;
    }
}
//# sourceMappingURL=Cliente.js.map