const readline = require('readline-sync'); // Importa o módulo readline-sync para ler a entrada do usuário

// Solicita ao usuário que digite um número e armazena na variável 'numero'
const numero = readline.question("Digite um numero: ");

// Inicializa a variável 'soma' com 0
let soma = 0;

// Inicia um loop que vai de 1 até o número fornecido pelo usuário
for(let i = 1; i <= numero; i++){
    soma += i; // Adiciona o valor de 'i' à variável 'soma'
}

// Exibe o resultado da soma de 1 até o número fornecido
console.log(`A soma de 1 até ${numero} é ${soma}.`);
