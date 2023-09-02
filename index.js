// this is a js file
// arthur

function imprimirOlaMundo() {
    console.log("ola mundo!");
}

imprimirOlaMundo();
 
function imprimirNome(nome) {
 console.log(`ola ${nome} `);
}
imprimirNome("arthur");
imprimirNome("sarah");
imprimirNome("matheus");

let lerNome = prompt("qual seu nome?");
imprimirNome(lerNome);

const a = 1;
function imprimeVariavel() {
const b = 2;
console.log("variavel a", a);
console.log("variavel b", b);
}

imprimeVariavel();

console.log("variavel a", a);

function calculaArea(altura, largura) {
    const area = altura * largura;
    return area;
}

//atribui retorno à uma variavel
const areaCalculada = calculaArea(2, 3);

// imprime retorno no console
console.log(calculaArea(2, 3));

function somar(numero1, numero2) {
    const soma = numero1 + numero2;
    return soma;
    
}
const resultado = somar(5, 7);
console.log(somar(5, 7));

function array() {

return array2;
}
const resultado2 = array();
console.log(array());
 
function retornaPrimeiroEUltimo(meuArray = []){
    let novoArray = [];
    novoArray[0] = (meuArray[meuArray.length-1])/2;
    novoArray[1] = (meuArray[0])/2;
    return novoArray;
}
let antigoArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
console.log(retornaPrimeiroEUltimo(antigoArray));
