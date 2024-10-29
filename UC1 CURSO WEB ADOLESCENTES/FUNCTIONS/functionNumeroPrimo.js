function numerosPrimos(inicio,fim) {
    let primos = [];
    for(let i = inicio; i <= fim; i++){
        if(ehPrimo(i)) {
            primos.push(i);
        }
    }
    return primos;
}

function ehPrimo(num) {
    if(num< 2) return false;
    for(let i = 2; i < numerosPrimos; i++) {
        if(num % i === 0) return false
    }
    return true;
}
console.log(numerosPrimos(10,30))
