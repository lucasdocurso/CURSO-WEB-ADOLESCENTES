const readline = require('readline-sync');

const soma1 = parseFloat(readline.question("Digite o primeiro numero: "));
const soma2 = parseFloat(readline.question("Digite o segundo numero: "));

function soma() {
    let somando = soma1 + soma2;
    console.log(`A soma dos 2 números é igual a ${somando}`);
}

soma();
