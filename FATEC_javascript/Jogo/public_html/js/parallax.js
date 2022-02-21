//parallax.js
function Parallax(context, imagem) {
    this.ctx = context;
    this.imagem = imagem;
    this.velocidade = 0;
    this.posicaoEmenda = 0;
}
Parallax.prototype = {
    atualizar: function () {
        this.posicaoEmenda += this.velocidade;
        if (this.posicaoEmenda > this.imagem.height)
            this.posicaoEmenda = 0;
    },
    desenhar: function () {
        var img = this.imagem;
        var y = this.posicaoEmenda - img.height;
        this.ctx.drawImage(img, 0, y,
                img.width, img.height);
        y = this.posicaoEmenda;
        this.ctx.drawImage(img, 0, y,
                img.width, img.height);
    }
}