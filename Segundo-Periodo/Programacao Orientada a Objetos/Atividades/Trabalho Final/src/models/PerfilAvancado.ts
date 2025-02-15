import { Perfil } from "./Perfil";

export class PerfiAvancado extends Perfil{
    alterarStatusPerfil(perfil: Perfil, status: string){
        perfil.status = status;
    }

    override toString(): string {
        return super.toString() + "🌟 | Avançado"
    }
}