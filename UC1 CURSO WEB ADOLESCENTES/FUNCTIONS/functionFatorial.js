const readline = require('readline-sync');

const numeroFatorial = parseInt(readline.question("Digite um numero para calcular o fatorial: "));

function fatorial(numero) {
    let vFatorial = 1;
    
    for (let i = 1; i <= numero; i++) {
        vFatorial *= i;
    }
    
    return vFatorial;
}

const resultadoFatorial = fatorial(numeroFatorial);

console.log(`A fatorial de ${numeroFatorial} é ${resultadoFatorial}`);