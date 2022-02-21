//inimigo.js
function Inimigo(context, imagem, imagemExplosao) {
    this.ctx = context;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
    this.imgExplosao = imagemExplosao;
}
Inimigo.prototype = {
    atualizar: function () {
        this.y += this.velocidade;
        if (this.y > this.ctx.canvas.height) {
            this.animacao.excluirSprite(this);
            this.colisor.excluirSprite(this);
        }
    },
    desenhar: function () {
        this.ctx.drawImage(this.imagem, this.x, this.y,
                this.imagem.width,
                this.imagem.height);
    },
    retangulosColisao: function () {
        var rets = [
            {x: this.x + 20, y: this.y + 1, largura: 25, altura: 10},
            {x: this.x + 2, y: this.y + 11, largura: 60, altura: 12},
            {x: this.x + 20, y: this.y + 23, largura: 25, altura: 7},
        ];
        return rets;
    },
    colidiuCom: function (outro) {
        if (outro instanceof Tiro) {
            this.animacao.excluirSprite(this);
            this.animacao.excluirSprite(outro);
            this.colisor.excluirSprite(this);
            this.colisor.excluirSprite(outro);
            var explosao = new Explosao(this.ctx,
                    this.imgExplosao,
                    this.x, this.y);
            this.animacao.novoSprite(explosao);
        }
        if (outro instanceof Nave) {
            this.animacao.desligar();
            alert("Game Over!");
        }
    },
    posicionarTela: function () {
        this.y = -this.imagem.height;
        var maxX = this.ctx.canvas.width -
                this.imagem.width + 1;
        this.x = this.valorAleatorio(1, maxX);
    },
    definirVelocidade: function (velMin, velMax) {
        this.velocidade = this.valorAleatorio(velMin, velMax);
    },
    valorAleatorio: function (min, max) {
        return min + Math.floor(Math.random() * (max - min + 1));
    }
}