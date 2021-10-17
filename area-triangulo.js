import entradaDados from 'readline-sync';

console.log("Área do triângulo retângulo: \n");

let base = Number(entradaDados.question("Informe a base: "));
let altura = Number(entradaDados.question("Informe a altura: "));

let area = (base * altura) / 2;

console.log("A área do triângulo é: "+area);