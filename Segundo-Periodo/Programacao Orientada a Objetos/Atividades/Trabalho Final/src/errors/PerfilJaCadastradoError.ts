export class PerfilJaCadastradoError extends Error{
    constructor(){
        super();
        this.message = 'Já existe um perfil com esses dados'
    }
}