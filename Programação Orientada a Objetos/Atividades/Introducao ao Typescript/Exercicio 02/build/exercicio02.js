"use strict";
/* 7.d - target com o valor ES3. Além disso, utilize a classe do exercício anterior e veja como ela é transpilada para JS; */
var ControleDeAudio = /** @class */ (function () {
    function ControleDeAudio() {
        this.volume = 2;
    }
    ControleDeAudio.prototype.AumentarVolume = function () {
        if (this.volume < 10) {
            this.volume++;
        }
    };
    ControleDeAudio.prototype.DiminuirVolume = function () {
        if (this.volume > 0) {
            this.volume--;
        }
    };
    ControleDeAudio.prototype.LerVolume = function () {
        return this.volume;
    };
    return ControleDeAudio;
}());
/* strictNullChecks para true e crie um exemplo que mostre a restrição; */
var exemplo = null;
