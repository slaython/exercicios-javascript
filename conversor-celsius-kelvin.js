import entradaDados from 'readline-sync';

console.log("Conversor de Temperatura Celsius para Kelvin: \n");

let C = entradaDados.question("Informe o valor em Celsius: ");

let K = Number(C) + 273.15;

console.log(C+"ºC equivale a "+K+"K");