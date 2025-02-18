import { Perfil } from "./Perfil";

export class Publicacao {
    id: number;
    conteudo: string;
    data: Date;
    autor: Perfil;

    constructor(id: number, conteudo: string, data: Date, autor: Perfil) {
        this.id = id;
        this.conteudo = conteudo;
        this.data = data;
        this.autor = autor;
    }

    toString(): string {
        return `
🆔 ID: ${this.id} | ✍️ Autor: ${this.autor.apelido} | 📅 Data: ${this.data.toLocaleString()}
📢 Conteúdo: "${this.conteudo}"`;
    }

    toJSON() {
        return {
            id: this.id,
            conteudo: this.conteudo,
            data: this.data.toISOString(),
            autor: this.autor.id
        };
    }
}