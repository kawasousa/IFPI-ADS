export class PerfilNaoAutorizadoError extends Error{
    constructor(){
        super();
        this.message = 'perfil não autorizado'
    }
}