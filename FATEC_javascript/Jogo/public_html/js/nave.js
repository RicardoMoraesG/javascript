//nave.js
function Nave(context, teclado, imagem){
    this.ctx = context;
    this.teclado = teclado;
    this.imagem = imagem;
    this.x = 0;
    this.y = 0;
    this.velocidade = 0;
    this.spritesheet = 
                    new SpriteSheet(context, imagem, 3,2);
    this.spritesheet.linha=0;
    this.spritesheet.intervalo = 60;
}
Nave.prototype ={
    atualizar:function(){
        if(this.teclado.isPressionada(SETA_ESQUERDA)&&
           this.x > 0){
           this.x -=this.velocidade; 
        }
        if(this.teclado.isPressionada(SETA_DIREITA) &&
           this.x < this.ctx.canvas.width - 36){
            this.x +=this.velocidade;
        }
        if(this.teclado.isPressionada(SETA_ACIMA) &&
           this.y >0){
            this.y -= this.velocidade;
        }
        if(this.teclado.isPressionada(SETA_ABAIXO) &&
           this.y <this.ctx.canvas.height - 48){
            this.y += this.velocidade;
        }
    },
    desenhar:function(){
        if(this.teclado.isPressionada(SETA_ESQUERDA)){
            this.spritesheet.linha = 1;
        } else if(this.teclado.isPressionada(SETA_DIREITA)){
            this.spritesheet.linha = 2;
        } else {
            this.spritesheet.linha = 0;
        }
        this.spritesheet.desenhar(this.x , this.y);
        this.spritesheet.proximoQuadro();
    },
    atirar:function(){
        var tiro = new Tiro(this.ctx, this);
        this.animacao.novoSprite(tiro);
        this.colisor.novoSprite(tiro);
    },
    retangulosColisao:function(){
        var rets = [
            {x:this.x+2,y:this.y+19,largura:9,altura:13},
            {x:this.x+13,y:this.y+3,largura:10,altura:33},
            {x:this.x+25,y:this.y+19,largura:9,altura:13}
        ];
        return rets;
    },
    colidiuCom:function(outro){
        
    }
}