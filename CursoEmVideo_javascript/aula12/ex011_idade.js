
function testeIdade() {
    var id = 68
    if (id < 16) {
        console.log('nao vota')
    } else if (id < 18 || id > 67) {
        console.log('voto opcional')
    } else {
        console.log('vota')
    }
}

