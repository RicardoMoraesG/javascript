/**
 * Fiz essas funções na página html, depois transferi para um documento JS
 * para testar.
 * Na página HTML basta indicar o endereço desse documento ao fim  do body
 * e tudo funcionou corretamente. 
 * VANTAGEM: HTML mais limpo.
 * CÓDIGO mais organizado.
 */


function somar() {
    //recebendo-conectando os valores
    var soma_txtn1 = window.document.getElementById('soma_txt1')//pode ser dessa maneira
    var soma_txtn2 = window.document.querySelector('input#soma_txt2')//ou dessa
    var soma_res = window.document.getElementById('soma_res')
    //tratando os valores
    var n1 = Number(soma_txtn1.value)//recebe um texto do input, aqui se converte em Number
    var n2 = Number(soma_txtn2.value)
    var s = n1 + n2 // 's' recebe a soma
    //exibe na tela:
    soma_res.innerHTML = `${n1} mais ${n2} é <strong>${s}</strong>`
}
function subtrair() {
    //recebendo-conectando os valores
    let sub_txtn1 = window.document.getElementById('sub_txt1')//pode ser dessa maneira
    let sub_txtn2 = window.document.querySelector('input#sub_txt2')//ou dessa
    let sub_res = window.document.getElementById('sub_res')
    //tratando os valores
    let sub_n1 = Number(sub_txtn1.value)//recebe um texto do input, aqui se converte em Number
    let sub_n2 = Number(sub_txtn2.value)
    let s = sub_n1 - sub_n2 // 's' recebe a subtração
    //exibe na tela:
    sub_res.innerHTML = `${sub_n1} menos ${sub_n2} é igual à <strong>${s}</strong>`
}
function multiplicar() {
    //conectando com o html:
    let x_txt1 = window.document.getElementById('x_txt1')
    let x_txt2 = window.document.getElementById('x_txt2')
    let x_res = window.document.getElementById('x_res')
    //tratando os valores:
    let x_n1 = Number(x_txt1.value)//transforma em Number o valor do texto
    let x_n2 = Number(x_txt2.value)
    let m = x_n1 * x_n2 //resultado da multiplicação
    //exibe na tela:
    x_res.innerHTML = ` ${x_n1} vezes ${x_n2} é igual a <strong>${m}</strong>`
}