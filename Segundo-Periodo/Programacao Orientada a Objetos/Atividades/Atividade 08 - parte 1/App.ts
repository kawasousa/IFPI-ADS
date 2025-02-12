import { Conta } from './Bank.ts'


function TesteTransferir() {
    const contaA: Conta = new Conta(1, '111-1', 100);
    const contaB: Conta = new Conta(2, '222-2', 1100);

    contaA.transferir(contaB, 200); // Levanta um Erro
}
