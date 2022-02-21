// expolsao.js
var SOM_EXPLOSAO = new Audio();
SOM_EXPLOSAO.src = "som/explosao.mp3";
SOM_EXPLOSAO.volume=0.4;
SOM_EXPLOSAO.load();

function Explosao(context, imagem, x, y){
    this.ctx = context;
    this.imagem = imagem;
    this.spritesheet = new SpriteSheet(ctx, imagem, 1,5);
    this.spritesheet.intervalo = 75;
    this.x = x;
    this.y = y;
    SOM_EXPLOSAO.currentTime = 0.0;
    SOM_EXPLOSAO.play();
    var explosao = this;
    var fimDaExplosao = null;
    
    this.spritesheet.fimDoCiclo = function(){
        explosao.animacao.excluirSprite(explosao);
        if(explosao.fimDaExplosao){
            explosao.fimDaExplosao();
        }
    }
}
Explosao.prototype ={
    atualizar:function(){
        
    },
    desenhar:function(){
        this.spritesheet.desenhar(this.x, this.y);
        this.spritesheet.proximoQuadro();
    }
}