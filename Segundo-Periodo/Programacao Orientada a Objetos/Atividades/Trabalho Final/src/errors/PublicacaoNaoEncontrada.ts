export class PublicacaoNaoEncontradaError extends Error{
    constructor(){
        super();
        this.message = 'Essa publicação não existe.'
    }
}