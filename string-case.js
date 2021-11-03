let programadx_1 = "Flávia";
let programadx_2 = "Rogério";

console.log(programadx_1.toUpperCase()); // FLÁVIA

console.log(programadx_2.toLowerCase()); // rogério



console.log('\n')
let programador_1 = "Flávia";
let programador_2 = "flávia";

if ( programador_1 == programador_2 ){
    console.log("iguais");
} else {
    console.log("diferentes");
}



console.log('\n')
let email_acesso = `slay@gmail.com`;
let email_cadastro = `SLAY@gmail.com`;

if (email_acesso.toLowerCase == email_cadastro.toLowerCase) {
    console.log(`Foi enviado um link de ativação para o seu email.`);
}
else {
    console.log(`Esse email não existe em nossa base de dados.`)
}