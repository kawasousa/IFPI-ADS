export class InteracaoDuplicadaError extends Error{
    constructor(){
        super();
        console.log('Essa interação já existe.');
    }
}