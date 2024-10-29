
// Importa o módulo readline-sync para permitir a leitura da entrada do usuário
const readline = require('readline-sync');

// Solicita que o usuário digite uma frase e converte tudo para minúsculas
const frase = readline.question("Digite uma frase: ").toLowerCase();

// Inicializa contadores para vogais e consoantes
let vogais = 0;
let consoantes = 0;

// Loop que percorre cada caractere da frase
for (let i = 0; i < frase.length; i++) {
    const caractere = frase[i]; // Obtém o caractere atual
    // Verifica se o caractere está entre 'a' e 'z'
    if (caractere >= 'a' && caractere <= 'z') {
        // Se for uma vogal (a, e, i, o, u), incrementa o contador de vogais
        if (caractere === 'a' || caractere === 'e' || caractere === 'i' || caractere === 'o' || caractere === 'u') {
            vogais++;
        } else {
            // Se não for uma vogal, incrementa o contador de consoantes
            consoantes++;
        }
    }
}

// Exibe o número total de vogais encontradas na frase
console.log("Número de vogais:", vogais);
// Exibe o número total de consoantes encontradas na frase
console.log("Número de consoantes:", consoantes);


