const readline = require("readline-sync");

const numero = parseInt(readline.question("digite seu numero:"));

if(numero == parseInt()) {
    console.log("Este caracter nao e valido, tente outro.")
}
if( numero % 2 === 0) {
    console.log(`O numero ${numero} e par.`);
}
else{
    console.log(`O numero ${numero} e impar.`);
}

