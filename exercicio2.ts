const entrada2= require("readline-sync");

let n1: number = parseFloat(entrada2.question("Digite um numero : "));
let n2: number = parseFloat(entrada2.question("Digite outro numero : "));


if(n1  >  n2){
    console.log('o primeiro numero é o maior');
}
else{
 console.log('o  segundo numero é o maior');
}