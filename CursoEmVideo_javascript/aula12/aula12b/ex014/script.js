function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()
    var fundo = window.document.getElementById('fundo')
    msg.innerHTML = `Agora são ${hora}h${minutos}.</br>`//</br> dentro da string quebra linha
    if (hora >= 0 && hora < 12){
        msg.innerHTML += 'Bom dia!'
        fundo.style.background = 'rgba(77, 182, 231, 0.644)'
        //bom dia
        img.src = 'img/manha.png'
    }else if (hora >= 12 && hora < 18) {
        msg.innerHTML += 'Boa tarde!'        
        fundo.style.background = 'rgba(73, 53, 5, 0.472)'
        //boa tarde
        img.src = 'img/tarde.png'
    } else{
        msg.innerHTML += 'Boa noite!'        
        fundo.style.background = 'rgba(1, 13, 53, 0.472)'
        //boa noite
        img.src = 'img/noite.png'
    }
}