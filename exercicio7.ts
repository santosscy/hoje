const entrada7 = require("readline-sync");

let dia = parseInt(entrada7.question("Digite o dia: "));
let mes = parseInt(entrada7.question("Digite o mes: "));
let ano = parseInt(entrada7.question("Digite o ano: "));

let ehValida = mes >= 1 && mes <= 12;

if (mes == 2) {
  if ((ano % 4 == 0 && ano % 100 != 0) || ano % 400 == 0) {
    ehValida = dia >= 1 && dia <= 29;
  } else {
    ehValida = dia >= 1 && dia <= 28;
  }
} else if (mes == 4 || mes == 6 || mes == 9 || mes == 11) {
 
  ehValida = dia >= 1 && dia <= 30;
} else {
  
  ehValida = dia >= 1 && dia <= 31;
}

if (ehValida) {
  console.log("Data válida!");
} else {
  console.log("Data inválida!");
}

