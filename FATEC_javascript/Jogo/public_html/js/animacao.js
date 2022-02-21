//animacao.js
function Animacao(context) {
    this.ctx = context;
    this.sprites = [];
    this.ligado = false;
    this.processamentos = [];

    this.spritesExcluir = [];
    this.processamentosExcluir = [];
}
Animacao.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
        sprite.animacao = this;
    },
    ligar: function () {
        this.ligado = true;
        this.proximoFrame();
    },
    desligar: function () {
        this.ligado = false;
    },
    proximoFrame: function () {
        if (!this.ligado)
            return;

        for (var i in this.sprites)
            this.sprites[i].atualizar();

        for (var i in this.sprites)
            this.sprites[i].desenhar();

        for (var i in this.processamentos)
            this.processamentos[i].processar();

        this.processarExclusoes();

        var animacao = this;
        requestAnimationFrame(function () {
            animacao.proximoFrame();
        })
    },
    limparTela: function () {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width,
                this.ctx.canvas.height);
    },
    novoProcessamento: function (processamento) {
        this.processamentos.push(processamento);
        processamento.animacao = this;
    },
    excluirSprite: function (sprite) {
        this.spritesExcluir.push(sprite);
    },
    excluirProcessamento: function (processamento) {
        this.processamentosExcluir.push(processamento);
    },
    processarExclusoes: function () {
        var manterSprites = [];
        var manterProcessamentos = [];

        for (var i in this.sprites) {
            if (this.spritesExcluir.indexOf(this.sprites[i]) == -1)
                manterSprites.push(this.sprites[i]);
        }

        for (var j in this.processamentos) {
            if (this.processamentosExcluir
                    .indexOf(this.processamentos[j]) == -1)
                manterProcessamentos.push(this.processamentos[j]);
        }
        this.spritesExcluir = [];
        this.processamentosExcluir = [];
        this.sprites = manterSprites;
        this.processamentos = manterProcessamentos;
    }
}



