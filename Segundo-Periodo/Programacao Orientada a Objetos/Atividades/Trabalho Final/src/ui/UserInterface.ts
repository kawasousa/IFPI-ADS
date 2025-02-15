import inquirer from "inquirer";
import { RedeSocial } from "../services/RedeSocial";

export default class UserInterface {
  private rede: RedeSocial;

  constructor() {
    this.rede = new RedeSocial();
  }

  async iniciar() {
    console.clear();
    await this.rede.obterPerfisSalvos();
    await this.rede.obterPublicacoesSalvas();

    let exit = false;
    while (!exit) {
      console.log();
      const { opcao } = await inquirer.prompt([
        {
          type: "list",
          name: "opcao",
          message: "👾 Menu da Rede Social - Escolha uma opção:",
          choices: [
            { name: "➕ Adicionar perfil", value: "adicionarPerfil" },
            { name: "🌟 Adicionar perfil avançado", value: "adicionarPerfilAvancado" },
            { name: "📋 Listar perfis", value: "listarPerfis" },
            { name: "📝 Adicionar publicação", value: "adicionarPublicacao" },
            { name: "🆕 Adicionar publicação avançada", value: "adicionarPublicacaoAvancada" },
            { name: "📄 Listar publicações", value: "listarPublicacoes" },
            { name: "✉️  Enviar solicitação de amizade", value: "enviarSolicitacao" },
            { name: "✅ Aceitar solicitação de amizade", value: "aceitarSolicitacao" },
            { name: "❌ Recusar solicitação de amizade", value: "recusarSolicitacao" },
            { name: "💬 Adicionar interação em publicação avançada", value: "adicionarInteracao" },
            { name: "🛠️ Mudar status de perfil usando perfil avançado", value: "AlterarStatus" },
            { name: "💾 Salvar dados", value: "salvarDados" },
            { name: "🚪 Sair", value: "sair" },
          ],
          loop: false,
          pageSize: 13
        },
      ]);

      console.clear();
      switch (opcao) {
        case "adicionarPerfil":
          await this.adicionarPerfil();
          break;
        case "adicionarPerfilAvancado":
          await this.adicionarPerfilAvancado();
          break;
        case "listarPerfis":
          this.rede.listarPerfis();
          break;
        case "adicionarPublicacao":
          await this.adicionarPublicacao();
          break;
        case "adicionarPublicacaoAvancada":
          await this.adicionarPublicacaoAvancada();
          break;
        case "listarPublicacoes":
          await this.listarPublicacoes();
          break;
        case "enviarSolicitacao":
          await this.enviarSolicitacao();
          break;
        case "aceitarSolicitacao":
          await this.aceitarSolicitacao();
          break;
        case "recusarSolicitacao":
          await this.recusarSolicitacao();
          break;
        case "adicionarInteracao":
          await this.adicionarInteracao();
          break;
        case "AlterarStatus":
          await this.AlterarStatus();
          break;
        case "salvarDados":
          await this.salvarDados();
          break;
        case "sair":
          exit = true;
          break;
        default:
          console.log("Opção inválida! ❗");
          break;
      }
    }

    console.log("Saindo... Até mais! 👋");
  }

  private async adicionarPerfil() {
    const respostas = await inquirer.prompt([
      { type: "input", name: "apelido", message: "Informe o apelido:" },
      {
        type: "list",
        name: "foto",
        message: "Escolha um emoji para a foto:",
        choices: [
          { name: "😃 Sorriso", value: "😃" },
          { name: "😎 Óculos", value: "😎" },
          { name: "💻 Computador", value: "💻" },
          { name: "🦄 Unicórnio", value: "🦄" },
        ],
        loop: false,
      },
      { type: "input", name: "email", message: "Informe o email:" },
      {
        type: "list",
        name: "status",
        message: "Selecione o status:",
        choices: ["Ativado", "Desativado"],
        loop: false,
      },
    ]);

    this.rede.adicionarPerfil(
      respostas.apelido,
      respostas.foto,
      respostas.email,
      respostas.status
    );
    console.log("Perfil avançado adicionado com sucesso! 🎉");
  }

  private async adicionarPerfilAvancado() {
    const respostas = await inquirer.prompt([
      { type: "input", name: "apelido", message: "Informe o apelido:" },
      {
        type: "list",
        name: "foto",
        message: "Escolha um emoji para a foto:",
        choices: [
          { name: "😃 Sorriso", value: "😃" },
          { name: "😎 Óculos", value: "😎" },
          { name: "💻 Computador", value: "💻" },
          { name: "🦄 Unicórnio", value: "🦄" },
        ],
        loop: false,
      },
      { type: "input", name: "email", message: "Informe o email:" },
      {
        type: "list",
        name: "status",
        message: "Selecione o status:",
        choices: ["Ativado", "Desativado"],
        loop: false,
      },
    ]);

    this.rede.adicionarPerfilAvancado(
      respostas.apelido,
      respostas.foto,
      respostas.email,
      respostas.status
    );
    console.log("Perfil adicionado com sucesso! 🎉");
  }

  private async adicionarPublicacao() {
    const respostas = await inquirer.prompt([
      { type: "input", name: "conteudo", message: "Conteúdo da publicação:" },
      { type: "input", name: "autorID", message: "Informe o ID do autor:" },
    ]);

    try {
      this.rede.adicionarPublicacao(respostas.conteudo, new Date(), respostas.autorID);
      console.log("Publicação adicionada com sucesso! 🚀");
    } catch (error: any) {
      console.error("Erro ao adicionar publicação:", error.message);
    }
  }

  private async adicionarPublicacaoAvancada() {
    const respostas = await inquirer.prompt([
      { type: "input", name: "conteudo", message: "Conteúdo da publicação avançada:" },
      { type: "input", name: "autorID", message: "Informe o ID do autor:" },
    ]);

    try {
      this.rede.adicionarPublicacaoAvancada(respostas.conteudo, new Date(), respostas.autorID);
      console.log("Publicação avançada adicionada com sucesso! 🚀");
    } catch (error: any) {
      console.error("Erro ao adicionar publicação avançada:", error.message);
    }
  }

  private async listarPublicacoes() {
    const resposta = await inquirer.prompt([
      {
        type: "input",
        name: "perfilID",
        message: "Informe o ID do perfil para filtrar (ou deixe vazio para todas):",
      },
    ]);
    this.rede.listarPublicacoes(resposta.perfilID || undefined);
  }

  private async enviarSolicitacao() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "perfilEnviadorId",
        message: "Informe o ID do perfil que envia a solicitação:",
      },
      {
        type: "input",
        name: "perfilRecebedorId",
        message: "Informe o ID do perfil que receberá a solicitação:",
      },
    ]);

    try {
      this.rede.enviarSolicitacao(respostas.perfilEnviadorId, respostas.perfilRecebedorId);
      console.log("Solicitação enviada com sucesso! 👍");
    } catch (error: any) {
      console.error("Erro ao enviar solicitação:", error.message);
    }
  }

  private async aceitarSolicitacao() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "perfilEnviadorId",
        message: "Informe o ID do perfil que enviou a solicitação:",
      },
      {
        type: "input",
        name: "perfilRecebedorId",
        message: "Informe o ID do perfil que recebeu a solicitação:",
      },
    ]);

    try {
      this.rede.aceitarSolicitacao(respostas.perfilEnviadorId, respostas.perfilRecebedorId);
      console.log("Solicitação aceita com sucesso! 🎉");
    } catch (error: any) {
      console.error("Erro ao aceitar solicitação:", error.message);
    }
  }

  private async recusarSolicitacao() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "perfilEnviadorId",
        message: "Informe o ID do perfil que enviou a solicitação:",
      },
      {
        type: "input",
        name: "perfilRecebedorId",
        message: "Informe o ID do perfil que recebeu a solicitação:",
      },
    ]);

    try {
      this.rede.recusarSolicitacao(respostas.perfilEnviadorId, respostas.perfilRecebedorId);
      console.log("Solicitação recusada com sucesso! 😢");
    } catch (error: any) {
      console.error("Erro ao recusar solicitação:", error.message);
    }
  }

  private async adicionarInteracao() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "publicacaoAvancadaId",
        message: "Informe o ID da publicação avançada:",
      },
      {
        type: "input",
        name: "autorId",
        message: "Informe o ID do autor da interação:",
      },
      {
        type: "list",
        name: "tipo",
        message: "Selecione o tipo de interação:",
        choices: [
          { name: "Curtir 👍", value: "Curtir" },
          { name: "Não Curtir 👎", value: "NaoCurtir" },
          { name: "Riso 😂", value: "Riso" },
          { name: "Surpresa 😲", value: "Surpresa" },
        ],
      },
    ]);

    try {
      this.rede.adicionarInteracao(
        Number(respostas.publicacaoAvancadaId),
        respostas.autorId,
        respostas.tipo
      );
      console.log("Interação adicionada com sucesso! 🎉");
    } catch (error: any) {
      console.error("Erro ao adicionar interação:", error.message);
    }
  }

  private async AlterarStatus() {
    const respostas = await inquirer.prompt([
      {
        type: "input",
        name: "perfiAtivadorID",
        message: "Informe o ID do perfil que altera o status:",
      },
      {
        type: "input",
        name: "perfilAtivadoID",
        message: "Informe o ID do perfil de status alterado:",
      },
      {
        type: "list",
        name: "status",
        message: "Selecione o novo status:",
        choices: [
          { name: "Ativado", value: "Ativado" },
          { name: "Desativado", value: "Desativado" }
        ],
      },
    ]);

    try {
      this.rede.alterarStatusDePerfil(respostas.perfiAtivadorID, respostas.perfilAtivadoID, respostas.status);
      console.log("Interação adicionada com sucesso! 🎉");
    } catch (error: any) {
      console.error("Erro ao alterar status:", error.message);
    }
  }

  private async salvarDados() {
    try {
      await this.rede.salvarPerfis();
      await this.rede.salvarPublicacoes();
      console.log("Dados salvos com sucesso! 💾");
    } catch (error: any) {
      console.error("Erro ao salvar dados:", error.message);
    }
  }
}