import entradaDados from 'readline-sync';

let valor = Number(entradaDados.question('Qual valor que será parcelado? '));

let parcelas = Number(entradaDados.question('O parcelamento será em quantas vezes? '));

let contador = 1;

console.log("\nValor de R$ "+valor+", parcelado em "+parcelas+" vezes.");
console.log(
    'OBS: terá um acrescimo de 10% em cima do valor total da compra.',
    '\nO valor de 10% será distribuído entre as percelas de forma homegênia.\n'
    );

while ( contador <= parcelas ) {

    let acrescimo = (valor/100) * 10;

    let acrescimo_parcelas = acrescimo / parcelas;

    let mensalidade = (valor/parcelas) + acrescimo_parcelas;

    console.log(contador+'° será de R$'+mensalidade+'.');

    contador++;
}