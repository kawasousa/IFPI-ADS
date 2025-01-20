var SituacaoFinanceira = /** @class */ (function () {
    function SituacaoFinanceira() {
    }
    SituacaoFinanceira.prototype.CalcularSaldo = function () {
        return this.valorCredito - this.valorDebito;
    };
    return SituacaoFinanceira;
}());
function main() {
    //Instanciando a classe.
    var sitacao = new SituacaoFinanceira();
    //Inicialização dos atributos.
    sitacao.valorCredito = 100.5;
    sitacao.valorDebito = 25.5;
    //Saída
    console.log("Saldo: ".concat(sitacao.CalcularSaldo()));
}
main();
