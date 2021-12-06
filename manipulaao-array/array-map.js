const carros = [
    { marca: 'Fiat', modelo: 'Uno', anoFabricacao: 2015 },
    { marca: 'GM', modelo: 'Onix', anoFabricacao: 2018 },
    { marca: 'Ford', modelo: 'KA+', anoFabricacao: 2018 },
    { marca: 'Fiat', modelo: 'Cronos', anoFabricacao: 2020 },
];
  
function retornaCarro(carro) {
    return carro.marca + ' ' + carro.modelo + ', ano: ' + carro.anoFabricacao;
}
  
const novosCarros = carros.map(retornaCarro);
  
console.log(novosCarros);

//-----------------------------

const meses = [
    "Janeiro", 
    "Fevereiro", 
    "Março", "Abril",
    "Maio", 
    "Junho", 
    "Julho", 
    "Agosto",
    "Setembro", 
    "Outubro", 
    "Novembro", 
    "Dezembro"
];

function abreviar(mes) {
    return mes.substr(0,3)
}

const mesesAbreviados = meses.map(abreviar);

console.log(mesesAbreviados);