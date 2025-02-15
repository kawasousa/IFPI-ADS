export class InteracaoDuplicadaError extends Error{
    constructor(){
        super();
        this.message = 'Essa interação já existe.'
    }
}