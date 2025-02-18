import { PerfilNaoEncontradoError } from "../errors/PerfilNaoEncontradoError";
import { PublicacaoNaoEncontradaError } from "../errors/PublicacaoNaoEncontrada";
import { SolicitacaoJaEnviadaError } from "../errors/SolicitacaoJaEnviadaError";
import { SolicitacaoNaoEncontradaError } from "../errors/SolicitacaoNaoEncontradaError";
import { Interacao } from "../models/Interacao";
import { Perfil } from "../models/Perfil";
import { PerfiAvancado } from "../models/PerfilAvancado";
import { Publicacao } from "../models/Publicacao";
import { PublicacaoAvancada } from "../models/PublicacaoAvancada";
import { TipoInteracao } from "../models/TipoInteracao";
import { DataManager } from '../services/DataManager';

export class RedeSocial {
  perfis: Perfil[];
  publicacoes: Publicacao[];
  solicitacoes: Map<Perfil, Perfil>;
  private dataManager: DataManager;

  constructor() {
    this.perfis = [];
    this.publicacoes = [];
    this.solicitacoes = new Map<Perfil, Perfil>();
    this.dataManager = new DataManager();
  }

  async obterPerfisSalvos(): Promise<void> {
    try {
      const perfisDados = await this.dataManager.obterPerfils();
      this.perfis = this.transformarPerfis(perfisDados);
      console.log("Perfis recuperados com sucesso! 🎉");
    } catch (error) {
      console.error("Erro ao recuperar perfis:", error);
    }
  }

  async obterPublicacoesSalvas(): Promise<void> {
    try {
      const publicacoesDados = await this.dataManager.obterPublicacoes();
      this.publicacoes = this.transformarPublicacoes(publicacoesDados);
      console.log("Publicações recuperadas com sucesso! 🚀");
    } catch (error) {
      console.error("Erro ao recuperar publicações:", error);
    }
  }

  async salvarPerfis(): Promise<void> {
    try {
      await this.dataManager.salvarPerfis(this.perfis);
      console.log("Perfis salvos com sucesso! 💾✨");
    } catch (error) {
      console.error("Erro ao salvar perfis:", error);
    }
  }

  async salvarPublicacoes(): Promise<void> {
    try {
      await this.dataManager.salvarPublicacoes(this.publicacoes);
      console.log("Publicações salvas com sucesso! 💾✨");
    } catch (error) {
      console.error("Erro ao salvar publicações:", error);
    }
  }

  adicionarPerfil(apelido: string, foto: string, email: string, status: string) {
    const id = this.perfis.length + 1;
    const perfil: Perfil = new Perfil(id, apelido, foto, email, status);
    this.perfis.push(perfil);
  }

  buscarPerfil(identificadorUnico: string): Perfil | null {
    for (const perfil of this.perfis) {
      if (
        perfil.apelido === identificadorUnico ||
        perfil.id.toString() === identificadorUnico ||
        perfil.email === identificadorUnico
      ) {
        return perfil;
      }
    }
    return null;
  }

  buscarPublicacaoAvancada(id: number) {
    const publicacoesAvancadas = this.publicacoes.filter((p) => p instanceof PublicacaoAvancada);

    for (const publicacaoAvancada of publicacoesAvancadas) {
      if (publicacaoAvancada.id === id) {
        return publicacaoAvancada;
      }
    }
    return null;
  }

  private transformarPerfis(perfisDados: any[]): Perfil[] {
    return perfisDados.map(perfil => {
      return new Perfil(perfil._id, perfil._apelido, perfil._foto, perfil._email, perfil._status);
    });
  }

  private transformarPublicacoes(publicacoesDados: any[]): Publicacao[] {
    return publicacoesDados.map(publicacao => {
      if (!publicacao.autor) {
        console.error(`Publicação com ID ${publicacao.id} não tem autor!`);
        return null;  // Retorna null se o autor não estiver presente
      }
      if (publicacao.interactions) {
        const autor = this.buscarPerfil(publicacao.autor.toString());
        
        if (!autor) {
          console.error(`Autor não encontrado para a publicação avançada com ID ${publicacao.id}`);
          return null;
        }
        const pubAvancada = new PublicacaoAvancada(publicacao.id, publicacao.conteudo, new Date(publicacao.data), autor);
        
        if (publicacao.interactions) {
          pubAvancada.interacoes = publicacao.interactions.map((interacaoData: any) => {
            const interacaoAutor = this.buscarPerfil(interacaoData.autor.toString());

            if(!interacaoAutor) throw new PerfilNaoEncontradoError();

            return new Interacao(interacaoData.id, interacaoData.tipo, pubAvancada, interacaoAutor);
          });
        }

        return pubAvancada;
      } else {
        const autor = this.buscarPerfil(publicacao.autor.toString());
        if (!autor) {
          console.error(`Autor não encontrado para a publicação com ID ${publicacao.id}`);
          return null;
        }
        return new Publicacao(publicacao.id, publicacao.conteudo, new Date(publicacao.data), autor);
      }
    }).filter(publicacao => publicacao !== null);
  }

  listarPerfis() {
    this.perfis.forEach(perfil => console.log(perfil.toString()));
  }

  habilitarPerfil(perfilAtivador: PerfiAvancado, perfilAtivado: Perfil) {
    perfilAtivador.habilitarPerfil(perfilAtivado);
  }

  desabilitarPerfil(perfilDesabilitador: PerfiAvancado, perfilDesabilitado: Perfil) {
    perfilDesabilitador.desabilitarPerfil(perfilDesabilitado);
  }

  adicionarPublicacao(conteudo: string, data: Date, autorID: string) {
    const perfil = this.buscarPerfil(autorID);
    if (!perfil) throw new PerfilNaoEncontradoError();

    const id = this.publicacoes.length + 1;
    const publicacao = new Publicacao(id, conteudo, data, perfil);

    this.publicacoes.push(publicacao);
    perfil.adicionarPublicacao(publicacao);
  }

  // Novo método para adicionar publicação avançada
  adicionarPublicacaoAvancada(conteudo: string, data: Date, autorID: string) {
    const perfil = this.buscarPerfil(autorID);
    if (!perfil) throw new PerfilNaoEncontradoError();

    const id = this.publicacoes.length + 1;
    const publicacaoAvancada = new PublicacaoAvancada(id, conteudo, data, perfil);
    // Inicialmente, a lista de interações estará vazia (poderia ser preenchida posteriormente)
    this.publicacoes.push(publicacaoAvancada);
    perfil.adicionarPublicacao(publicacaoAvancada);
  }

  listarPublicacoes(perfilFiltradoId?: string) {
    let publicacoes: Publicacao[] = this.publicacoes.sort((a, b) => a.data.getTime() - b.data.getTime());

    if (perfilFiltradoId) {
      publicacoes = publicacoes.filter((p) => p.autor.id.toString() === perfilFiltradoId);
    }

    if (publicacoes.length === 0) {
      console.log("🚫 Nenhuma publicação encontrada!");
      return;
    }

    for (const publicacao of publicacoes) {
      console.log(publicacao.toString());
    }
  }

  enviarSolicitacao(perfilEnviadorId: string, perfilRecebedorId: string) {
    const perfilEnviador = this.buscarPerfil(perfilEnviadorId);
    const perfilRecebedor = this.buscarPerfil(perfilRecebedorId);

    if (!perfilEnviador || !perfilRecebedor) throw new PerfilNaoEncontradoError();
    if (this.solicitacoes.has(perfilEnviador)) throw new SolicitacaoJaEnviadaError();

    this.solicitacoes.set(perfilEnviador, perfilRecebedor);
  }

  aceitarSolicitacao(perfilEnviadorId: string, perfilRecebedorId: string) {
    const perfilEnviador = this.buscarPerfil(perfilEnviadorId);
    const perfilRecebedor = this.buscarPerfil(perfilRecebedorId);

    if (!perfilEnviador || !perfilRecebedor) throw new PerfilNaoEncontradoError();
    if (!this.solicitacoes.has(perfilEnviador)) throw new SolicitacaoNaoEncontradaError();

    perfilEnviador.adicionarAmigo(perfilRecebedor);
    perfilRecebedor.adicionarAmigo(perfilEnviador);
    this.solicitacoes.delete(perfilEnviador);
  }

  recusarSolicitacao(perfilEnviadorId: string, perfilRecebedorId: string) {
    const perfilEnviador = this.buscarPerfil(perfilEnviadorId);
    const perfilRecebedor = this.buscarPerfil(perfilRecebedorId);

    if (!perfilEnviador || !perfilRecebedor) throw new PerfilNaoEncontradoError();
    if (!this.solicitacoes.has(perfilEnviador)) throw new SolicitacaoNaoEncontradaError();
    this.solicitacoes.delete(perfilEnviador);
  }

  adicionarInteracao(publicacaoAvancadaId: number, autorId: string, tipo: string) {
    const publicacaoAvancada = this.buscarPublicacaoAvancada(publicacaoAvancadaId);
    const autor: Perfil | null = this.buscarPerfil(autorId);

    if (!autor) throw new PerfilNaoEncontradoError();
    if (!publicacaoAvancada) throw new PublicacaoNaoEncontradaError();

    const id = publicacaoAvancada.interacoes.length;
    const tipoInteracao: TipoInteracao = tipo as TipoInteracao;
    const interacao: Interacao = new Interacao(id, tipoInteracao, publicacaoAvancada, autor);

    publicacaoAvancada.adicionarInteracao(interacao);
  }
}