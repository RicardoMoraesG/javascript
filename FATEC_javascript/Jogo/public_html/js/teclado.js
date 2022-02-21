// teclado.js
var SETA_DIREITA = 39;
var SETA_ESQUERDA = 37;
var ESPACO = 32;
var SETA_ACIMA = 38;
var SETA_ABAIXO = 40;

function Teclado(elemento) {
    this.elemento = elemento;
    this.pressionadas = [];   // array de teclas pressionadas
    this.disparadas = [];     // array de teclas disparos
    this.funcoesDisparo = []; // array de funções de disparo

    var teclado = this;

    elemento.addEventListener("keydown", function (e) {
        var tecla = e.keyCode;
        teclado.pressionadas[tecla] = true;
        if (teclado.funcoesDisparo[tecla] && // há função
                !teclado.disparadas[tecla]) { // não foi usada?
            teclado.disparadas[tecla] = true;
            teclado.funcoesDisparo[tecla]();
        }
    });

    elemento.addEventListener("keyup", function (e) {
        var tecla = e.keyCode;
        teclado.pressionadas[tecla] = false;
        teclado.disparadas[tecla] = false;
    });
}
Teclado.prototype = {
    isPressionada: function (tecla) {
        return this.pressionadas[tecla];
    },
    disparar: function (tecla, funcao) {
        this.funcoesDisparo[tecla] = funcao;
    }
}

