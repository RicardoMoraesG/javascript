function verificar() {
    var data = new Date() // recebe a data atual do computador.
    //recebendo os dados do HTML:
    var ano = data.getFullYear()  // recebe o ano atual completo, exemplo 2020, 1999.
    var txt_ano = document.getElementById('txt_ano')//recebe o texto digitado pelo usuario.
    var res = document.getElementById('res')//fornece a resposta no HTML.
    //tratando os dados:
    if (txt_ano.value.lenght == 0 || Number(txt_ano.value) > ano) {//verifica a validade da data digitada.        
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else { //a data é válida, será calculada:
        var txt_sex = document.getElementsByName('radsex')//recebe a opção entre mas e fem
        var idade = ano - Number(txt_ano.value)
        //tratar gênero:
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var fundo = document.getElementById('fundo')
        //criando elemento HTML diretamente no JS: imagem 
        if (txt_sex[0].checked) {
            genero = 'Homem'
            fundo.style.background = 'blue'

            if (idade <= 0 || idade < 3) {
                img.setAttribute('src', 'homem0.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'homem5.png')
            } else if (idade < 23) {
                img.setAttribute('src', 'homem15.png')
            } else if (idade < 33) {
                img.setAttribute('src', 'homem25.png')
            } else if (idade < 43) {
                img.setAttribute('src', 'homem35.png')
            } else if (idade < 53) {
                img.setAttribute('src', 'homem45.png')
            } else if (idade < 63) {
                img.setAttribute('src', 'homem55.png')
            } else {
                img.setAttribute('src', 'homem65.png')
            }
        } else if (txt_sex[1].checked) {
            genero = 'Mulher'
            fundo.style.background = 'rosybrown'
            if (idade < 3) {
                img.setAttribute('src', 'mulher0.png')
            } else if (idade < 13) {
                img.setAttribute('src', 'mulher5.png')
            } else if (idade < 23) {
                img.setAttribute('src', 'mulher15.png')
            } else if (idade < 33) {
                img.setAttribute('src', 'mulher25.png')
            } else if (idade < 43) {
                img.setAttribute('src', 'mulher35.png')
            } else if (idade < 53) {
                img.setAttribute('src', 'mulher45.png')
            } else if (idade < 63) {
                img.setAttribute('src', 'mulher55.png')
            } else if (idade < 73) {
                img.setAttribute('src', 'mulher65.png')
            } else {
                img.setAttribute('src', 'mulher75.png')
            }
        }
        res.innerHTML = `${genero} Idade: ${idade} anos.</br>`
        res.appendChild(img)//adiciona a imagem na resposta
    }

}