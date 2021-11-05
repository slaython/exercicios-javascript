const dataAtual = new Date();

dataAtual.setFullYear(1998);
console.log( dataAtual );

dataAtual.setMonth(1);
console.log( dataAtual );

dataAtual.setDate(20);
console.log( dataAtual );

dataAtual.setHours(11);
console.log( dataAtual );

dataAtual.setMinutes(0);
console.log( dataAtual );

dataAtual.setSeconds(59);
console.log( dataAtual );

dataAtual.setMilliseconds(15);
console.log( dataAtual+'\n' );

//--------------------------------

dataAtual.setUTCFullYear(1998);
console.log( dataAtual );
dataAtual.setUTCMonth(5);
console.log( dataAtual );
dataAtual.setUTCDate(20);
console.log( dataAtual );
dataAtual.setUTCHours(11);
console.log( dataAtual );
dataAtual.setUTCMinutes(0);
console.log( dataAtual );
dataAtual.setUTCSeconds(59);
console.log( dataAtual );
dataAtual.setUTCMilliseconds(15);
console.log( dataAtual );
console.log( '\n' );

//--------------------------------

const datAtual = new Date("2020-11-09 01:05:09");
console.log(datAtual.toDateString());
// Impressão: Mon Nov 09 2020

datAtual.setTime(886302309000);
console.log(datAtual.toDateString());
// Impressão: Sun Feb 01 1998