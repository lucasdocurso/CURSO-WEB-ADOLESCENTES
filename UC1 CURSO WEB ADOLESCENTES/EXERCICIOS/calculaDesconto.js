const readline = require('readline-sync');

const valorProduto = readline.question("Qual e o valor do produto? ")

console.log("Escolha a forma de pagamento");
console.log("1 - PIX");
console.log("2 - Débito");
console.log("3 - Crédito");
const formaPagamento = readline.question("Qual e a forma de pagamento? ")

if (formaPagamento >= 1 && formaPagamento <= 3) {
    if (formaPagamento == 1) {
        const valorPagar = (valorProduto * 0.9).toFixed(2);
        console.log("Forma de pagamento escolhida foi PIX");
        console.log(`Total a pagar R$${valorPagar}`);    
    } else if (formaPagamento == 2){
        const valorPagar = (valorProduto * 0.95).toFixed(2);
        console.log("Forma de pagamento escolhida foi Debito");
        console.log(`Total a pagar R$${valorPagar}`);
    } else if (formaPagamento == 3){
        const valorPagar = (valorProduto * 0.97).toFixed(2);
        console.log("Forma de pagamento escolhida foi Credito");
        console.log(`Total a pagar R$${valorPagar}`);
    }
} else {
    console.log("Opção de pagamento invalida.");
}
console.log("");