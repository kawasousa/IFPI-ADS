export class PerfilJaCadastradoError extends Error{
    constructor(){
        super();
        console.log('Esse perfil não está autorizado.');
    }
}