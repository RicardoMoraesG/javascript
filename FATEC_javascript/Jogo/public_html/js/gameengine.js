//gameengine.js
function include(file) {
    var script = document.createElement("script");
    script.src = file;
    script.type = "text/javascript";
    script.defer = "true";
    document.getElementsByTagName("head").item(0).appendChild(script);
}

include("js/teclado.js");
include("js/animacao.js");
include("js/colisor.js");
include("js/spritesheet.js");
include("js/parallax.js");
include("js/tiro.js");
include("js/nave.js");
include("js/inimigo.js");
include("js/explosao.js");
