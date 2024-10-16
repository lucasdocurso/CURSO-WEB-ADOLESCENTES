const readline = require("readline-sync");

const velocidade = readline.question("Qual a velocidade do carro?");

const limiteVelocidade = 80

const multa = (velocidade - limiteVelocidade)*5

if(velocidade > limiteVelocidade) 
    console.log(`Voce ultrapassou o limite de velocidade da via, total a pagar R$${multa}.`)

else{
    console.log("Voce esta dentro dos limites da via!")
}

    


    