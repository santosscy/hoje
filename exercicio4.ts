const entrada4 = require("readline-sync");

let bleize: number = parseFloat(entrada4.question("Digite um numero: "));

if(bleize > 80){
    let injustica: number =  (bleize - 80) * 7
    console.log('Você foi multado em R$' + injustica);
}