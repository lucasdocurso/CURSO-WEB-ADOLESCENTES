const readline = require("readline-sync");

const idade = parseInt(readline.question("Qual sua idade?"));

let idadeReal = (2024 - idade)

if (idadeReal > 1926 && idadeReal < 1946 ) {
  console.log(`voce tem ${idadeReal} anos e voce faz parte da geracao "Geracao Silenciosa"`);
}    
else if( idadeReal > 1947 && idadeReal < 1963) {
    console.log(`voce nasceu no ano de ${idadeReal} e voce faz parte da geracao "Baby Boomers"`);
}
else if(idadeReal > 1964 && idadeReal < 1983) {
   console.log(`voce nasceu no ano de ${idadeReal} e voce faz parte da geracao "Geracao X"`); 
}    
else if(idadeReal > 1984 && idadeReal< 1995) {
    console.log(`voce nasceu no ano de ${idadeReal} e voce faz parte da geracao "Millenials"`);
}       
else if(idadeReal > 1996 && idadeReal < 2009) {
    console.log(`voce nasceu no ano de ${idadeReal} e voce faz parte da geracao "Geracao Z"`);
} 
else if(idadeReal >= 2010) {
    console.log(`voce nasceu no ano de ${idadeReal} e voce faz parte da geracao "Geracao Alpha"`);
} 
      








