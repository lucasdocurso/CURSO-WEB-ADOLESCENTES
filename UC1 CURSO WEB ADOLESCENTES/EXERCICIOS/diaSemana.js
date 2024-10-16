const readline = require("readline-sync");

const  numero = parseInt(readline.question("digite seu numero de 1 a 7:"));
switch(numero) {
    case 1:
        console.log("Hoje e domingo.")
        break;  
        case 2:
        console.log("Hoje e segunda-feira.")
         break;
        case 3:
        console.log("Hoje e terca-feira.")
        break;
        case 4:
        console.log("Hoje e quarta-feira.")
        break;
        case 5:
        console.log("Hoje e quinta-feira.")
        break;
        case 6:
        console.log("Hoje e sabado.")
        break;
    default:
        console.log("Insira um numero valido")
        break;
}
