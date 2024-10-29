const readline = require('readline-sync'); // Importa o módulo readline-sync para ler a entrada do usuário

// Solicita ao usuário que digite um número e armazena na variável 'numero'
let numero = readline.question("Digite um numero: ");

// Inicia um loop que vai de 1 até o número fornecido pelo usuário
for(let i = 1; i <= numero; i++){
    // Exibe o número atual do loop
    console.log(`Numero ${i}`);
}

// Mensagem indicando que o loop terminou
console.log("Acabou!");
