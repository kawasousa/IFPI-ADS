export class SolicitacaoJaEnviadaError extends Error{
    constructor(){
        super();
        this.message = 'Essa solicitacao já foi enviada.'
    }
}