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