export class PerfilInativoError extends Error{
    constructor(){
        super();
        this.message = 'Esse perfil está inativo.'
    }
}