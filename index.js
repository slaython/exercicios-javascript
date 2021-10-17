import entradaDados from 'readline-sync';

let nome = entradaDados.question('Digite seu nome: ');
console.log('Olá, '+nome);
console.log('Qual os dois numeros que você quer somar?');

let x = Number(entradaDados.question('Digite o primeiro número: '));
let y = Number(entradaDados.question('Digite o segundo número: '));

let soma = (x + y);

console.log(nome, ', a soma dos números é' ,soma, '.');