class Conta {
    id: number;
    cpf: String;
    saldo: number;

    sacar(valor: number){
        this.saldo -= valor;
    }

    depositar(valor: number){
        this.saldo += valor;
    }
}

var contadoiglesio = new Conta;
contadoiglesio.id = 1;
contadoiglesio.saldo = 0;
contadoiglesio.cpf = "69";

contadoiglesio.depositar(10);

console.log(contadoiglesio.saldo)