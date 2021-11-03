let telefone_1 = "(99) 99999-9999";
let telefone_2 = "    (99) 99999-9999    ";

if ( telefone_1 == telefone_2 ){
    console.log("Os telefones são iguais");
} else {
    console.log("Os telefones são diferentes");
}

console.log(telefone_1); // (99) 99999-9999
console.log(telefone_2); //    (99) 99999-9999

//--------------------------------------------

console.log('\n');
let cep_acesso = '  29888-900    ';
let cep_cadastro = '29888-900';

console.log('Usando o parânmetro ".trim"\n'
+cep_cadastro+'\n'
+cep_acesso
);


if(cep_acesso.trim == cep_cadastro.trim){
    console.log('Os CEPs são iguais.');
}
else{
    console.log('Os CEPs são diferentes.')
}