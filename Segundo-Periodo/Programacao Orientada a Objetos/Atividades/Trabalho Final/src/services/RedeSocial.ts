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
            this.perfis = await this.dataManager.obterPerfils();
            console.log("Perfis recuperados com sucesso! 🎉");
        } catch (error) {
            console.error("Erro ao recuperar perfis:", error);
        }
    }

    async obterPublicacoesSalvas(): Promise<void> {
        try {
            this.publicacoes = await this.dataManager.obterPublicacoes();
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

    listarPublicacoes(perfilFiltradoId?: string) {
        let publicacoes = this.publicacoes.sort((a, b) => a.data.getTime() - b.data.getTime());

        if (perfilFiltradoId) {
            publicacoes = publicacoes.filter((p) => p.autor.id.toString() === perfilFiltradoId);
        }

        if (publicacoes.length === 0) {
            console.log("🚫 Nenhuma publicação encontrada!");
            return;
        }

        for(const publicacao of publicacoes){
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