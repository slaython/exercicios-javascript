let fras = "Estou aprendendo JavaScript na DevMedia";

let resultad = fras.substr(17, 10);

console.log(resultad); // JavaScript

//----------------------

let frase = "Eu sou programador JavaScript";

let resultado = frase.substring(7, 18);

console.log(resultado); // programador

//------------------------

let conteudo = "Neste artigo de JavaScript veremos como utilizar o método substring()"
+" para extrair uma sequência de caracteres de uma string.";

let tamanho = conteudo.length;
let resumo = "";

if( tamanho > 100 ){

    resumo = conteudo.substr(0, 97);
    resumo += "...";

} else {

    resumo = conteudo;

}

console.log(resumo); // Neste artigo de JavaScript veremos como utilizar o método substring() para extrair uma sequência ...