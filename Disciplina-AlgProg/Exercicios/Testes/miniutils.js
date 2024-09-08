import { question } from "readline-sync";

export function obterNumero(message = ': '){
    return Number(question(message))
}