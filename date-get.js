// 2020-11-09T18:43:57.961Z
const dataAtual = new Date();

// Vai imprimir 10
console.log( 'getMonth', dataAtual.getMonth());

// Vai imprimir 11
console.log( 'getMonth', dataAtual.getMonth() + 1, '\n');


//0 => Janeiro
//1 => Fevereiro
//2 => Março
//3 => Abril
//4 => Maio
//5 => Junho
//6 => Julho
//7 => Agosto
//8 => Setembro
//9 => Outubro
//10 => Novembro
//11 => Dezembro
//------------------------------------

//0 => Domingo
//1 => Segunda-feira
//2 => Terça-feira
//3 => Quarta-feira
//4 => Quinta-feira
//5 => Sexta-feira
//6 => Sábado
console.log( dataAtual.getFullYear() );
console.log( dataAtual.getMonth() );
console.log( dataAtual.getDate() );
console.log( dataAtual.getHours() );
console.log( dataAtual.getMinutes() );
console.log( dataAtual.getSeconds() );
console.log( dataAtual.getMilliseconds() );
console.log( dataAtual.getDay(), '\n' );

//-------------------------------------

console.log( dataAtual.getUTCFullYear() );
console.log( dataAtual.getUTCMonth() );
console.log( dataAtual.getUTCDate() );
console.log( dataAtual.getUTCHours() );
console.log( dataAtual.getUTCMinutes() );
console.log( dataAtual.getUTCSeconds() );
console.log( dataAtual.getUTCMilliseconds() );
console.log( dataAtual.getUTCDay(), '\n' );

//-------------------------------------

console.log( dataAtual.getTime() );
console.log( dataAtual.getTimezoneOffset() );
console.log( dataAtual.valueOf() );