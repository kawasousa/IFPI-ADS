export class PerfilJaCadastradoError extends Error{
    constructor(){
        super();
        console.log('Esse perfil está inativo.');
    }
}