"use strict";
class ControleDeAudio {
    constructor() {
        this.volume = 2;
    }
    AumentarVolume() {
        if (this.volume < 10) {
            this.volume++;
        }
    }
    DiminuirVolume() {
        if (this.volume > 0) {
            this.volume--;
        }
    }
    LerVolume() {
        return this.volume;
    }
}
