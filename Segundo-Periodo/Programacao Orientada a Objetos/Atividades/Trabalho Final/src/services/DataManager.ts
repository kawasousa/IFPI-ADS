import { promises as fs } from 'fs';
import { join } from 'path';

export class DataManager {
    private perfisFilePath: string = join(__dirname, '../../db/perfis.json');
    private publicacoesFilePath: string = join(__dirname, '../../db/publicacoes.json');

    public async obterPerfils(): Promise<any[]> {
        try {
            const data = await fs.readFile(this.perfisFilePath, 'utf-8');
            const perfis = JSON.parse(data);
            console.log('Perfis carregados com sucesso! 🎉');
            return perfis;
        } catch (error) {
            console.error('Erro ao ler perfis:', error);
            return [];
        }
    }

    public async obterPublicacoes(): Promise<any[]> {
        try {
            const data = await fs.readFile(this.publicacoesFilePath, 'utf-8');
            const publicacoes = JSON.parse(data);
            console.log('Publicações carregadas com sucesso! 🚀');
            return publicacoes;
        } catch (error) {
            console.error('Erro ao ler publicações:', error);
            return [];
        }
    }

    public async salvarPerfis(perfis: any[]): Promise<void> {
        try {
            const data = JSON.stringify(perfis, null, 2);
            await fs.writeFile(this.perfisFilePath, data, 'utf-8');
            console.log('Perfis salvos com sucesso! 💾✨');
        } catch (error) {
            console.error('Erro ao salvar perfis:', error);
        }
    }

    public async salvarPublicacoes(publicacoes: any[]): Promise<void> {
        try {
            const data = JSON.stringify(publicacoes, null, 2);
            await fs.writeFile(this.publicacoesFilePath, data, 'utf-8');
            console.log('Publicações salvas com sucesso! 💾✨');
        } catch (error) {
            console.error('Erro ao salvar publicações:', error);
        }
    }
}
