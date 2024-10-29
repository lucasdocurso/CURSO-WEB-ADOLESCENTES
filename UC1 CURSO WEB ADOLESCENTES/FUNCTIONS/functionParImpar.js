const readline = require('readline-sync');
console.log("--------------PAR OU IMPAR--------------");
console.log("");
const numero = parseFloat(readline.question("Digite um numero: "));

function imparPar() {
    if( numero % 2 === 0) {
        console.log(`O numero ${numero} e par.`);
    }
    else{
        console.log(`O numero ${numero} e impar.`);
    }
}

imparPar();