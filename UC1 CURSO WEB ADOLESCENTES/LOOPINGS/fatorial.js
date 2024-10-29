const readline = require('readline-sync'); // Importa o módulo readline-sync para ler a entrada do usuário

// Solicita ao usuário que digite um número para calcular seu fatorial e armazena na variável 'numero'
const numero = readline.question("Digite um numero para calcular sua fatorial: ");
let fatorial = 1; // Inicializa a variável 'fatorial' com 1

// Inicia um loop que vai de 1 até o número fornecido pelo usuário
for (let i = 1; i <= numero; i++) {
    fatorial *= i; // Multiplica 'fatorial' pelo número atual do loop
}

// Exibe o resultado do fatorial do número fornecido
console.log(`A fatorial de ${numero} e:`, fatorial);
