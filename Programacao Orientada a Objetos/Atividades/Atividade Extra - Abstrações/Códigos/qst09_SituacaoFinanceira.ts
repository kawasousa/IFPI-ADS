class SituacaoFinanceira {
    public valorCredito: number;
    public valorDebito: number;

    public CalcularSaldo(): number {
        return this.valorCredito - this.valorDebito;
    }
}

function main(): void {
    //Instanciando a classe.
    const sitacao: SituacaoFinanceira = new SituacaoFinanceira();

    //Inicialização dos atributos.
    sitacao.valorCredito = 100.5;
    sitacao.valorDebito = 25.5;

    //Saída
    console.log(`Saldo: ${sitacao.CalcularSaldo()}`);
}
main();