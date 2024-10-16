const readline = require("readline-sync");

const bebidas = readline.question("Qual a bebida de sua escolha?(1 a 5)");

switch(bebidas) {
    case "1":
        console.log("Red Label: Valor: R$99.99")
        break;  
        case "2":
        console.log("Skol: Valor: R$3,50")
         break;
        case "3":
        console.log("Kisla: Valor: R$45,50")
        break;
        case "4":
        console.log("Licor 43: Valor: R$129.99")
        break;
        case "5":
        console.log("Jack Daniels: Valor: R$239.50")
        break;   
    default:
        console.log("Insira um numero valido")
        break;
}