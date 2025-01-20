/* 7.d - target com o valor ES3. Além disso, utilize a classe do exercício anterior e veja como ela é transpilada para JS; */
class ControleDeAudio {
    private volume: number;

    public constructor() {
        this.volume = 2;
    }

    public AumentarVolume(): void {
        if (this.volume < 10) {
            this.volume++;
        }
    }

    public DiminuirVolume(): void {
        if (this.volume > 0) {
            this.volume--;
        }
    }

    public LerVolume(): number {
        return this.volume;
    }
}

/* strictNullChecks para true e crie um exemplo que mostre a restrição; */
const exemplo: string = null;

/* 7.f Configure um projeto seu para que seja possível realizar depuração alterando o atributo sourceMap. */
const controle: ControleDeAudio = new ControleDeAudio();
controle.AumentarVolume();
controle.AumentarVolume();
const volumeAtual = controle.LerVolume();
console.log(volumeAtual);