export class PerfilJaCadastradoError extends Error{
    constructor(){
        super();
        console.log('Já existe um perfil com esses dados.');
    }
}