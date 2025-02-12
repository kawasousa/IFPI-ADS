import Banco from "./Banco.js";
import Cliente from "./Cliente.js";
import Poupanca from "./Poupanca.js";

function TesteRenderJuros(): void {
    const Bank: Banco = new Banco();
    const client: Cliente = new Cliente('ely', '825', new Date);
    const account: Poupanca = new Poupanca("111-1", 0, 0.5);
    
    Bank.inserirCliente(client);
    Bank.inserirConta(account);

    Bank.associarContaCliente("111-1", "825");

    account.depositar(200);

    console.log("Saldo antes de render" + account.saldo);
    
    Bank.renderJuros("111-1");
    console.log(account.saldo);
    
}