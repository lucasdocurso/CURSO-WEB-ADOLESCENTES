const readline = require("readline-sync"); // Importa o módulo readline-sync para ler a entrada do usuário

// Solicita ao usuário que digite um número e armazena na variável 'numero'
const numero = readline.question("Digite um numero: ");

// Exibe o cabeçalho da tabuada para o número informado
console.log(`-------------TABUADA DO ${numero}---------------`);
console.log(""); // Linha em branco para espaçamento

// Inicia um loop que vai de 0 até 10
for(let i = 0; i <= 10; i++) {
    let resultado = numero * i; // Calcula o resultado da multiplicação do número pelo valor de 'i'
    // Exibe o resultado da multiplicação formatado
    console.log(`              ${numero} X ${i} = ${resultado}`);
}
console.log(""); // Linha em branco para espaçamento
// Exibe uma linha de separação ao final da tabuada
console.log("-----------------------------------------");







//FORMA ONDE APARECE TODAS AS TABUADAS NO TERMINAL DE 1 A 10

/*for (let i = 1; i <= 10; i++) {
    console.log(`Tabuada do ${i}:`);
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log(); 
}*/
