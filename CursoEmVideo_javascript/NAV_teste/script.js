

function nav_change() {
    //controles:
    let n_scrolly = window.scrollY;//identifica quantos pixels a tela rolou.
    let nav_style = window.document.getElementById('nav_squeeze');//controla a nav
    //ações:    
    if (n_scrolly > 300) {
        nav_style.classList.remove("nav_large")
        nav_style.classList.add("nav_small")
    } else {
        nav_style.classList.remove("nav_small");
        nav_style.classList.add("nav_large");
    }
    let texto = window.document.getElementById('texto')//controla o texto dentro da nav
    texto.innerHTML = `Scrolly ${n_scrolly}`//escreve o scrool no texto  
    }




/*
let nav = document.getElementById('nav_mutant');
if(nav.window.scroll() > 300) {
    nav.removeClass('nav_large').addClass('nav_small');
} else {
    nav.removeClass('nav_small').addClass('nav_large');
}
*/


function tabuada() {
    let num = document.getElementById('txtn')//controle do elemento 
    let tab = document.getElementById('seltab')//controle do elemento
    if (num.value.length == 0) {//se nada for digitado
        window.alert('Por favor, digite um número!')
    } else {
        let n = Number(num.value)//transforma o valor txt em number
        let c = 1 //inicio da contagem da tabuada
        tab.innerHTML = ''//limpa a tela quando quiser outra tabuada.
        /*CÓDIGO UTILIZANDO WHILE:
        while (c <= 10) {
                    let item = document.createElement('option')//cria uma linha nova de opção/option
                    item.text = ` ${n} x ${c} = ${n * c}`//o texto que representará um linha da tabuada
                    item.value = `tab${c}`//identifica o 'Value' da estrutura de option, exemplo: <option value="AQUI"></option>
                    tab.appendChild(item)//cria o proximo item dentro da option
                    c++//avança um numero
                }*/
        //CÓDIGO UTILIZANDO FOR:
        for (c; c <= 10; c++) {
            let item = document.createElement('option')//cria uma linha nova de opção/option
            item.text = ` ${n} x ${c} = ${n * c}`//o texto que representará um linha da tabuada
            item.value = `tab${c}`//identifica o 'Value' da estrutura de option, exemplo: <option value="AQUI"></option>
            tab.appendChild(item)//cria o proximo item dentro da option
        }
    }
}