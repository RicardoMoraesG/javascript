//tiro.js
var SOM_TIRO = new Audio();
SOM_TIRO.src = "som/tiro.mp3";
SOM_TIRO.load();

function Tiro(context, objAtirador) {
    this.ctx = context;
    this.objOrigem = objAtirador;
    this.largura = 4;
    this.altura = 20;
    this.x = objAtirador.x +
            (objAtirador.imagem.width / 2) / 2 -
            (this.largura / 2);
    this.y = objAtirador.y - this.altura;
    this.velocidade = 10;
    this.cor = "yellow";
    SOM_TIRO.currentTime = 0.0;
    SOM_TIRO.play();
}
Tiro.prototype = {
    atualizar: function () {
        this.y -= this.velocidade;
        if (this.y < -this.altura) {
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
        }
    },
    desenhar: function () {
        this.ctx.save();
        this.ctx.fillStyle = this.cor;
        this.ctx.fillRect(this.x, this.y, this.largura,
                this.altura);
        this.ctx.restore();
    },
    retangulosColisao: function () {
        return [
            {x: this.x,
                y: this.y,
                largura: this.largura,
                altura: this.altura}
        ];
    },
    colidiuCom: function (outro) {

    }
}