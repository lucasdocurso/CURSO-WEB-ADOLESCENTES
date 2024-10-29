const readline = require("readline-sync"); // Importa o módulo readline-sync para ler a entrada do usuário
let opcao = 1; // Inicializa a variável 'opcao' para controlar o loop
let qdIdadesDigitadas = 0; // Contador para a quantidade de idades digitadas
let qdIdadesDigitadasMaior21 = 0; // Contador para a quantidade de idades maiores ou iguais a 21
let somaIdades = 0; // Acumulador para a soma das idades
let mediaIdades = 0; // Variável para armazenar a média das idades

// Inicia um loop que continuará enquanto 'opcao' for igual a 1
while (opcao == 1) {
    let idade = parseInt(readline.question("Digite uma idade: ")); // Lê a idade digitada pelo usuário e converte para inteiro
    opcao = readline.question("Digite '1' para continuar ou pressione enter para parar: "); // Pergunta se o usuário quer continuar ou parar

    // Contar quantidade de idades digitadas
    qdIdadesDigitadas++; // Incrementa o contador de idades digitadas

    // Contar idades maiores que 21
    if (idade >= 21) { // Verifica se a idade digitada é maior ou igual a 21
        qdIdadesDigitadasMaior21++; // Incrementa o contador para idades maiores ou iguais a 21
    }

    // Calcular a média
    somaIdades += idade; // Adiciona a idade digitada à soma total das idades
    mediaIdades = somaIdades / qdIdadesDigitadas; // Calcula a média das idades
}

// Exibe resultados
console.log(""); // Linha em branco para espaçamento
console.log(""); // Outra linha em branco para espaçamento
console.log(`Foram digitadas ${qdIdadesDigitadas} idades diferentes.`); // Exibe a quantidade de idades digitadas
console.log(`Existem ${qdIdadesDigitadasMaior21} maiores que ou igual a 21`); // Exibe a quantidade de idades maiores ou iguais a 21
console.log(`A média das idades é ${mediaIdades}`); // Exibe a média das idades
