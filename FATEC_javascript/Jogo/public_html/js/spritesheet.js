// spritesheet.js
function SpriteSheet(context, imagem, linhas, colunas) {
    this.ctx = context;
    this.imagem = imagem;
    this.numColunas = colunas;
    this.numLinhas = linhas;
    this.intervalo = 0;
    this.linha = 0;
    this.coluna = 0;
    this.ultimoTempo = 0;
    this.fimDoCiclo = null;
}
SpriteSheet.prototype = {
    proximoQuadro: function () {
        var agora = new Date().getTime();
        //so permite a troca de quadro no instante definido
        if (agora - this.ultimoTempo < this.intervalo)
            return;
        // determina a troca de quadros indefinidamente
        if (this.coluna < this.numColunas - 1)
            this.coluna++;
        else {
            this.coluna = 0;
            if (this.fimDoCiclo)
                this.fimDoCiclo();
        }


        this.ultimoTempo = agora;
    },
    desenhar: function (x, y) {
        larguraQuadro = this.imagem.width / this.numColunas;
        alturaQuadro = this.imagem.height / this.numLinhas;

        this.ctx.drawImage(this.imagem,
                larguraQuadro * this.coluna,
                alturaQuadro * this.linha,
                larguraQuadro, alturaQuadro,
                x, y, larguraQuadro, alturaQuadro);
    }
}