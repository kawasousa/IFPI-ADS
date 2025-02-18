import { Perfil } from "./Perfil";
import { PublicacaoAvancada } from "./PublicacaoAvancada";
import { TipoInteracao } from "./TipoInteracao";

export class Interacao {
    id: number;
    tipo: TipoInteracao;
    publicacaoAvancada: PublicacaoAvancada;
    autor: Perfil;

    constructor(id: number, tipo: TipoInteracao, publicacaoAvancada: PublicacaoAvancada, autor: Perfil) {
        this.id = id;
        this.tipo = tipo;
        this.autor = autor;
        this.publicacaoAvancada = publicacaoAvancada;
    }

    toJSON() {
        return {
            id: this.id,
            tipo: this.tipo,
            autor: this.autor,
        };
    }
}