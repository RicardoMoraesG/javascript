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