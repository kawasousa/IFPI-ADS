import { Perfil } from "./Perfil";

export class PerfiAvancado extends Perfil{
    habilitarPerfil(perfil: Perfil){
        perfil.ativarPerfil();
    }

    desabilitarPerfil(perfil: Perfil){
        perfil.desativarPerfil();
    }
}