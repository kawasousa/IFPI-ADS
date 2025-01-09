var conta = {
    cpf,
    saldo,
    id
}

function depositar(conta, valor){
    conta.saldo += valor;
}

function sacar(conta, valor){
    conta.saldo -= valor
}