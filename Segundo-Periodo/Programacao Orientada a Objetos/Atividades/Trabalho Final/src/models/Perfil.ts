import { AmizadeJaExistenteError } from "../errors/AmizadeJaExistenteError";
import { Publicacao } from "./Publicacao";

export class Perfil {
    private _id: number;
    private _apelido: string;
    private _foto: string;
    private _email: string;
    private _status: string;
    private _amigos: Perfil[];
    private _publicacoes: Publicacao[];

    constructor(id: number, apelido: string, foto_url: string, email: string, status: string) {
        this._id = id;
        this._apelido = apelido;
        this._foto = foto_url;
        this._email = email;
        this._status = status;
        this._publicacoes = [];
        this._amigos = [];
    }

    adicionarAmigo(amigo: Perfil) {
        if (this._amigos.includes(amigo)) throw new AmizadeJaExistenteError();
        this._amigos.push(amigo);
    }

    removerAmigo(amigo: Perfil) {
        this._amigos.splice(this._amigos.indexOf(amigo), 1);
    }

    adicionarPublicacao(publicacao: Publicacao) {
        this._publicacoes.push(publicacao);
    }

    listarAmigos() {
        for (const amigo of this._amigos) {
            console.log(amigo.apelido);
        }
    }

    listarPublicacoes() {
        for (const publicacao of this._publicacoes) {
            console.log(publicacao.toString());
        }
    }

    ativarPerfil() {
        this._status = "Ativado";
    }

    desativarPerfil() {
        this._status = "Desativado";
    }

    toString(): string {
        return `🆔 ID: ${this._id} | 🏷️ Apelido: ${this._apelido} | 📧 Email: ${this._email} | 📸 Foto: ${this._foto} | 🔵 Status: ${this._status}`;
    }

    get apelido(): string {
        return this._apelido;
    }

    get id(): number {
        return this._id;
    }

    get email(): string {
        return this._email;
    }

    get numeroPublicacoes() {
        return this._publicacoes.length
    }
}