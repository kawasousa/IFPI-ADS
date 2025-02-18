export class PerfilNaoEncontradoError extends Error{
    constructor(){
        super();
        console.log('Esse perfil nao existe.');
    }
}