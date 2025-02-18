export class AmizadeJaExistenteError extends Error{
    constructor(){
        super();
        this.message = 'Esses perfis já são amigos.'
    }
}