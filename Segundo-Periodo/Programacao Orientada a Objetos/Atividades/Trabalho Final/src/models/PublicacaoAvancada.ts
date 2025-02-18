import { InteracaoDuplicadaError } from "../errors/InteracaoDuplicadaError";
import { Interacao } from "./Interacao";
import { Perfil } from "./Perfil";
import { Publicacao } from "./Publicacao";
import { TipoInteracao } from "./TipoInteracao";

export class PublicacaoAvancada extends Publicacao{
    interacoes: Interacao[];

    constructor(id: number, conteudo: string, date: Date, autor: Perfil){
        super(id, conteudo, date, autor);
        this.interacoes = [];
    }

    adicionarInteracao(interacao: Interacao){
        if(this.interacoes.includes(interacao)) throw new InteracaoDuplicadaError();
        this.interacoes.push(interacao);
    }

    listarInteracoes(){
        for(const interacao of this.interacoes){
            console.log(interacao);
        }
    }

    override toString(): string {
        const curtidas: number = this.interacoes.reduce((acc, cur) =>{
            return cur.tipo === TipoInteracao.Curtir? acc + 1 : acc;
        }, 0)
        const naoCurtidas: number = this.interacoes.reduce((acc, cur) =>{
            return cur.tipo === TipoInteracao.NaoCurtir? acc + 1 : acc;
        }, 0)
        const risos: number = this.interacoes.reduce((acc, cur) =>{
            return cur.tipo === TipoInteracao.Riso? acc + 1 : acc;
        }, 0)
        const surpresas: number = this.interacoes.reduce((acc, cur) =>{
            return cur.tipo === TipoInteracao.Surpresa? acc + 1 : acc;
        }, 0)

        return super.toString() + `\nInterações: ${curtidas}${TipoInteracao.Curtir} | ${naoCurtidas}${TipoInteracao.NaoCurtir} | ${risos}${TipoInteracao.Riso} | ${surpresas}${TipoInteracao.Surpresa}`
    }
}