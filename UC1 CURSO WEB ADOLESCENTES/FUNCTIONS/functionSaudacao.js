const readline = require('readline-sync');

const nome = readline.question("Qual é o seu nome?: ");

function saudacao() {
    console.log(`Bem-vindo, ${nome}!`);
}

saudacao(); 
