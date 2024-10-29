const readline = require("readline-sync"); // Importa o módulo readline-sync para ler a entrada do usuário

// Gerar um número randômico entre 1 e 10
let numero; // Declara a variável que armazenará a entrada do usuário

// Gera o número secreto aleatório entre 1 e 10
const numeroSecreto = Math.floor(Math.random() * 10 + 1);

// Inicia um loop que continuará até o usuário acertar o número secreto
do {
    numero = parseInt(readline.question("Digite um numero: ")); // Solicita ao usuário que digite um número
    console.log("Você errou, tente novamente!"); // Informa que o palpite estava incorreto
} 
while (numeroSecreto != numero); // Verifica se o número digitado é diferente do número secreto

console.log("Você acertou!"); // Mensagem de sucesso quando o usuário acerta
