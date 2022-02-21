//console.log(` `)
let vetor = []
vetor = ['zenaide', 'matias', 'adalberto', 'pedro']
vetor[4] = 'joana'
vetor.push('amanda')
//console.log(`${n}`)
//console.log(`o nome recebido pela primeira posição é ${n[0]}`)
vetor.sort()
//console.log(`mas depois de executar o comando .sort() o nome que ocupa a primeira posição é ${n[0]}`)
//console.log(`${n}`)
//console.log(`o vetor nomes tem ${n.length} posições`)
for (let lugar in vetor ) {
    console.log(`No lugar ${lugar} está o nome ${vetor[lugar]}`)
}