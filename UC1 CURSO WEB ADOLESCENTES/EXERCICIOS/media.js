const readline = require("readline-sync");

//SOLICITAR AS 3 NOTAS
const nota1 = parseFloat(readline.question("Digite a primeira nota:"));
const nota2 = parseFloat(readline.question("Digite a segunda nota:"));
const nota3 = parseFloat(readline.question("Digite a terceira nota:"));
const nota4 = parseFloat(readline.question("Digite a quarta nota:"));
const nota5 = parseFloat(readline.question("Digite a quinta nota:"));

//CALCULAR MÉDIA SIMPLES
let media = (nota1 + nota2 + nota3+ nota4 + nota5) /5

if ( media >=9) {
    console.log(readline.question(`sua media e ${media} e voce foi aprovado!(MUITO SATISAFATORIO)`))  
    }
    else if (media>= 7) {
        console.log(readline.question(`sua media e ${media} e voce foi aprovado!(SATISFATORIO)`))
    }
 
    else if (media>=6) {
        console.log(readline.question(`sua media e ${media} e voce foi aprovado!(QUASE REPROVOU)`))
    }
 else {
    console.log(readline.question(`sua media e ${media} e voce foi reprovado!`))
}
 