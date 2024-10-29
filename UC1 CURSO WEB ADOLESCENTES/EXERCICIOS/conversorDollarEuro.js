const readline = require('readline-sync');

const process = require("process")

console.log("===== CONVERSOR DE DOLLAR E EURO =====");
console.log("1. CONVERTER DOLLAR");
console.log("2. CONVERTER EURO");
console.log("3. SAIR");

opcao = readline.question("escolha uma opcao: ");

if(opcao == 3) {
    console.log("saindo....");
    process.exit()
}
const valor = readline.question("Qual o valor desejado para converter?")


function calculaDollar() {
    const valorDollar = 5.75
    const dollar = valorDollar * valor
    if (valorDollar) {
        console.log(`O valor em reais e de ${dollar}R$ `)
    }
    process.exit()
}
function calculaEuro() {
    const valorEuro = 6.00
    const euro = (valorEuro * valor)
    if (valorEuro) {
        console.log(`O valor em reais e de ${euro}R$ `)
    }
    process.exit()
}
function main() {

        switch (opcao) {
            case "1":
                calculaDollar();
                break;
            case "2":
                calculaEuro();
                break;
            case "3":
                console.log("saindo....");
                break;
            default:
                console.log("Opção inválida. Por favor, escolha uma opção válida.");
                break;
        }
    }
main()


