let vetor = []
//atribui valores randomicos(aleatórios)
for (let posi = 0; posi < 5; posi++) {
    vetor.push(Math.floor(Math.random() * 5))
}
for (let posicao in vetor) {
    console.log(`A posição ${posicao} contem o valor ${vetor[posicao]}`)
}
let numero = 4
let posicao = vetor.indexOf(numero)
if (posicao != -1) {
    console.log(`  A posição do número ${numero} é  ${vetor.indexOf(numero)} no vetor `)
} else {
    console.log(`  Não existe o número ${numero} no vetor `)
}
