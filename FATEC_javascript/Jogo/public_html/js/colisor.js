// colisor.js
function Colisor() {
    this.sprites = [];
    this.aoColidir = null;
    this.spritesExcluir = [];
}
Colisor.prototype = {
    novoSprite: function (sprite) {
        this.sprites.push(sprite);
        sprite.colisor = this;
    },
    houveColisao: function (ret1, ret2) {
        return (ret1.x + ret1.largura) > ret2.x &&
                ret1.x < (ret2.x + ret2.largura) &&
                (ret1.y + ret1.altura) > ret2.y &&
                ret1.y < (ret2.y + ret2.altura);
    },
    processar: function () {
        var jaTestados = new Object();
        for (var i in this.sprites) {
            for (var j in this.sprites) {
                if (i == j)
                    continue;
                var id1 = this.idColisao(this.sprites[i]);
                var id2 = this.idColisao(this.sprites[j]);
                if (!jaTestados[id1])
                    jaTestados[id1] = [];
                if (!jaTestados[id2])
                    jaTestados[id2] = [];
                if (!(jaTestados[id1].indexOf(id2) >= 0 ||
                        jaTestados[id2].indexOf(id1) >= 0)) {
                    this.testarColisao(this.sprites[i],
                            this.sprites[j]);
                    jaTestados[id1].push(id2);
                    jaTestados[id2].push(id1);
                }
            }
        }
        this.processarExclusoes();
    },
    testarColisao: function (sprite1, sprite2) {
        var ret1 = sprite1.retangulosColisao();
        var ret2 = sprite2.retangulosColisao();
        colisoes:
                for (var i in ret1) {
            for (var j in ret2) {
                if (this.houveColisao(ret1[i], ret2[j])) {
                    sprite1.colidiuCom(sprite2);
                    sprite2.colidiuCom(sprite1);
                    if (this.aoColidir)
                        this.aoColidir(sprite1, sprite2);
                    break colisoes;
                }
            }
        }
    },
    idColisao: function (sprite) {
        var stringId = "";
        var rets = sprite.retangulosColisao();
        for (var i in rets) {
            stringId += "x:" + rets[i].x + "," +
                    "y:" + rets[i].y + "," +
                    "w:" + rets[i].largura + "," +
                    "h:" + rets[i].altura + "\n";
        }
        return stringId;
    },
    excluirSprite: function (sprite) {
        this.spritesExcluir.push(sprite);
    },
    processarExclusoes: function () {
        var spritesManter = [];
        for (var i in this.sprites) {
            if (this.spritesExcluir.indexOf(this.sprites[i]) == -1)
                spritesManter.push(this.sprites[i]);
        }
        this.spritesExcluir = [];
        this.sprites = spritesManter;
    }
}




    