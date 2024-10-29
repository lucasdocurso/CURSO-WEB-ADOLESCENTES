const readline = require('readline-sync');

console.log("--------------MEDIAS DE NUMEROS--------------");
console.log("");
const media1 = parseFloat(readline.question("Digite o primeiro numero: "));
const media2 = parseFloat(readline.question("Digite o segundo numero: "));
const media3 = parseFloat(readline.question("Digite o terceiro numero: "));

function media() {
    let medias = (media1 + media2 + media3) / 3;
    console.log(`A media dos 3 numeros e ${medias}.`);
}

media();
