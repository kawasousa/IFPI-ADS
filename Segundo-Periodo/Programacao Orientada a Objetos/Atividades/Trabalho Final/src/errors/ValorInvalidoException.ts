export class ValorInvalidoError extends Error{
    constructor(){
        super();
        this.message = 'valor inválido'
    }
}