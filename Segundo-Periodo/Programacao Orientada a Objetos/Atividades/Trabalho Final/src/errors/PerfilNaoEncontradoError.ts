export class PerfilNaoEncontradoError extends Error{
    constructor(){
        super();
        this.message = 'esse perfil nao existe'
    }
}