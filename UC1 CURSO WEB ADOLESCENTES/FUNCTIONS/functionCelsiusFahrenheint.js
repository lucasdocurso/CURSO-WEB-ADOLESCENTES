const readline = require('readline-sync');
console.log("--------------CELSIUS PARA FAHRENHEINT--------------");
console.log("");
const valorCelsius = parseFloat(readline.question("Digite o valor em CELSIUS: "));

function celsiusFahrenheint() {
    const convertendo = (valorCelsius * (9/5)) + 32;
    console.log(`A sua temperatura em C foi convertida, a tempertura em fahrenheint e ${convertendo}F.`);
    console.log("")
    console.log("----------------------------------------------------")
}

celsiusFahrenheint();


