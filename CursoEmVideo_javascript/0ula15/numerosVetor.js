let vetor = []
//atribui valores randomicos(aleatórios)
console.log(`Sem usar o .floor() fica assim:`)
for (let posi = 0; posi < 5; posi++) {
    vetor.push(Math.random() * 10)//*Math: veja ao final
}

//percurso para exibição no vetor
for (let pos = 0; pos < vetor.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${vetor[pos]}`)
}
console.log(`Mas usando o .floor() fica assim:`)
for (let p = 0; p < vetor.length; p++) {
    vetor[p] = Math.floor(vetor[p])//atribuirá o valor inteiro, ou seja, ignorará o ponto flutuante(floor)    
    console.log(`A posição ${p} tem o valor ${vetor[p]}`)
}
/*OUTRO METODO DE CRIAR UM FOR:
for(let POSIÇÃO in NOME-ARRAY){
    COMANDOS
}*/
console.log(` ordenando os valores dentro do vetor: vetor.sort()`)
vetor.sort()//organiza em valor crescente (de strings)
console.log(`USANDO O METODO FOR(let||var IN array||vetor) :`)
for (let posicao in vetor) {
    console.log(`A posição ${posicao} contem o valor ${vetor[posicao]}`)
}

/* Math.random():

Em outras palavras, a função retornará um número entre 0 e 1 (podendo incluir o 0 mas não o 1), veja os resultados:

0.5824683890332182
0.15599339785628574
0.19135110741912686
0.4996250046384343
0.0008728340690463687
Para gerar números aleatórios na casa do inteiros, devemos multiplicar o método por um inteiro qualquer:

Math.random() * 10
Agora devemos utilizar a função Math.floor() para retirar a parte flutuante (números decimais).

Math.floor(Math.random() * 10)
O código acima irá gerar números aleatórios no seguinte “range” 0, 1, 2, 3, 4, 5, 6, 7, 8, e 9.
*/