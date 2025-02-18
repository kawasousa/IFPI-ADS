export class SolicitacaoNaoEncontradaError extends Error{
    constructor(){
        super();
        this.message = 'Essa solicitacao não existe.'
    }
}