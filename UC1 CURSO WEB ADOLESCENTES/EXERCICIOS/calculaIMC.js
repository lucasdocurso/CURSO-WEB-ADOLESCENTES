const readline = require("readline-sync");

const peso = readline.question("Qual seu peso?");
const altura = readline.question("Qual sua altura?");

valorIMC = (peso / altura **2).toFixed(3)

if (valorIMC <= 18.5) {
  console.log(`voce tem ${valorIMC} de IMC e esta abaixo da faixa de peso ideal`);
}    
else if(valorIMC >24.99) {
    console.log(`voce tem ${valorIMC} de IMC e voce esta MUITO acima da faixa de peso ideal`);
}
else if(valorIMC > 18.5 && valorIMC <24.99) {
   console.log(`voce tem ${valorIMC} de IMC e voce esta na faixa de peso ideal`); 
}    
