//Crie um contador que comece em 1 e vá até 10 usando um loop while. Mostre cada número.
let numero = 1;
while (numero <= 10) {
console.log(numero);
numero++;
}

//Crie um contador que começa em 10 e vá até 0 usando um loop while. Mostre cada número.
let numero = 10;
while (numero > 0) {
console.log(numero);
numero--;
}

//Crie um programa de contagem regressiva. Peça um número e conte deste número até 0, usando um loop while no console do navegador.
let numero = prompt('Escolha um número:');

while (numero >= 0) {
    console.log(numero);
    numero++;
}

//Crie um programa de contagem progressiva. Peça um número ao usuario e conte de 0 até esté número, usando um loop while no console do navegador.
let numeroMaximo = prompt("Digite um número para a contagem progregressiva:");;
let contador = 0;

while (contador <= numeroMaximo) {
    console.log(contador);
    contador++
}

//Altere o conteúdo da tag h1 com document.querySelector e atribua o seguinte texto: Hora do Desafio.
let titulo = document.querySelector ('h1');
titulo.innerHTML = 'Hora do Desafio';

//Crie uma função que exiba no console a mensagem O botão foi clicado sempre que o botão Console for pressionado.
function verificarConsole() {
    console.log('O Botão console foi pressionado');
}

//Crie uma função que exiba um alerta com a mensagem: Eu amo JS, sempre que o botão Alerta for pressionado
function verificarAlert() {
    alert('Eu amo JS');
}

//Crie uma função que é executada quando o botão prompt é clicado, perguntando o nome de uma cidade do Brasil. 
// Em seguida, exiba um alerta com a mensagem concatenando a resposta com o texto: Estive em {cidade} e lembrei de você.
function verificarPrompt() {
    let cidade = prompt('Digite uma cidade do Brasil:');
    alert(`Estive em ${cidade} e lembrei de você!`);
}

//Ao clicar no botão soma, peça 2 números inteiros e exiba o resultado da soma em um alerta.
function verificarSoma() {
    let num1 = parseInt(prompt('Digite um número:'));
    let num2 = parseInt(prompt('Digite outro numero:'));
    let soma = num1 + num2;
    alert(soma);
}   

//Criar uma função que exibe "Olá, mundo!" no console.
function apresentar() {
    console.log('Olá Mundo');
}

//Criar uma função que recebe um nome como parâmetro e exibe "Olá, [nome]!" no console.
function exibirNome(nome) {
    console.log(`Olá, ${nome}!`);
}
exibirNome('Lucas');

//Criar uma função que recebe um número como parâmetro e retorna o dobro desse número.
function calcularDobro(numero) {
    return numero*2;
}
let resultadoNumero = calcularDobro(5);
console.log(resultadoNumero);

//Criar uma função que recebe três números como parâmetros e retorna a média deles.
function calcularMedia(num1,num2,num3) {
    return (num1+num2+num3)/3;
}
let media = calcularMedia(3,1,6);
console.log(media);

//Criar uma função que recebe dois números como parâmetros e retorna o maior deles.
function encontrarMaior(a, b) {
  return a > b ? a : b;
}
let maiorNumero = encontrarMaior(15, 9);
console.log(maiorNumero);

//Criar uma função que recebe um número como parâmetro e retorna o resultado da multiplicação desse número por ele mesmo
function numeroEscolhido(num1) {
    return (num1*num1);
}
let dobro = numeroEscolhido(2);
console.log(dobro);

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:

function calculaIMC(altura, peso){
     let imc = peso / (alturaMetros * alturaMetros);
}


//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }

  let fatorial = 1;
  for (let i = 2; i <= numero; i++) {
    fatorial *= i;
  }

  return fatorial;
}

// Exemplo de uso
let numero = 5;
let resultado = calcularFatorial(numero);
console.log(`O fatorial de ${numero} é ${resultado}`);


//Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.

function converterDolarParaReal(valorEmDolar) {
  let cotacaoDolar = 4.80;
  let valorEmReais = valorEmDolar * cotacaoDolar;
  return valorEmReais.toFixed(2);
}

// Exemplo de uso
let valorEmDolar = 50;
let valorEmReais = converterDolarParaReal(valorEmDolar);
console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReais}`);


//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.

function calcularAreaPerimetroSalaRetangular(altura, largura) {
  let area = altura * largura;
  let perimetro = 2 * (altura + largura);
  
  console.log(`Área da sala: ${area} metros quadrados`);
  console.log(`Perímetro da sala: ${perimetro} metros`);
}

// Exemplo de uso
let altura = 3; // em metros
let largura = 5; // em metros
calcularAreaPerimetroSalaRetangular(altura, largura);