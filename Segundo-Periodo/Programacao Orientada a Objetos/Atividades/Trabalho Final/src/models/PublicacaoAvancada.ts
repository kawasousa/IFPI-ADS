import { Publicacao } from "./Publicacao";
import { TipoInteracao } from "./TipoInteracao";
import { Interacao } from "./Interacao";
import { Perfil } from "./Perfil";
import { InteracaoDuplicadaError } from "../errors/InteracaoDuplicadaError";

export class PublicacaoAvancada extends Publicacao {
  interacoes: Interacao[];

  constructor(id: number, conteudo: string, data: Date, autor: Perfil) {
    super(id, conteudo, data, autor);
    this.interacoes = [];
  }

  adicionarInteracao(interacao: Interacao) {
    if (this.interacoes.includes(interacao)) throw new InteracaoDuplicadaError();
    this.interacoes.push(interacao);
  }

  listarInteracoes() {
    for (const interacao of this.interacoes) {
      console.log(interacao.toString());
    }
  }

  override toString(): string {
    const curtidas = this.interacoes.filter(
      i => TipoInteracao[i.tipo as unknown as keyof typeof TipoInteracao] === TipoInteracao.Curtir).length;
    const naoCurtidas = this.interacoes.filter(
      i => TipoInteracao[i.tipo as unknown as keyof typeof TipoInteracao] === TipoInteracao.NaoCurtir).length;
    const risos = this.interacoes.filter(
      i => TipoInteracao[i.tipo as unknown as keyof typeof TipoInteracao] === TipoInteracao.Riso).length;
    const surpresas = this.interacoes.filter(
      i => TipoInteracao[i.tipo as unknown as keyof typeof TipoInteracao] === TipoInteracao.Surpresa).length;

    return super.toString() + `\nInterações: ${curtidas} ${TipoInteracao.Curtir} | ${naoCurtidas} ${TipoInteracao.NaoCurtir} | ${risos} ${TipoInteracao.Riso} | ${surpresas} ${TipoInteracao.Surpresa}`;
  }

  toJSON() {
    return {
      id: this.id,
      conteudo: this.conteudo,
      data: this.data.toISOString(),
      autor: this.autor.id,
      interactions: this.interacoes.map(interacao => interacao.toJSON())
    };
  }
}
