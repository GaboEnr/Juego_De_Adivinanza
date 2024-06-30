let numero = Math.floor(Math.random()*5) +1;

console.log(numero);

let nombre = 'gabriel';
console.log(`Hola ${nombre}`);
alert('Hola, ' +nombre)

let respuesta = prompt("Cual es el lenguaje de programacion que mas te gusta");
console.log(respuesta);

let valor1 = 5;
let valor2 = 2;
let resultadoSuma = valor1 + valor2;
let resultadoResta = valor1 - valor2;
console.log(`la suma del resultado de ${valor1} y ${valor2} es ${resultadoSuma} y la resta es ${resultadoResta}`);

let edad = prompt("ingresa tu edad")

if(edad > 18){
    console.log('es mayor de edad');
} else {
    console.log('es menor');
}

let num = prompt("Ingresa un valor");

num = Number(num);
if(num > 0){
    console.log('es positivo');
} else if(num < 0){
    console.log('es negativo');
} else if(num === 0){
    console.log('es cero');
}

let contador = 1;

while(contador <= 10){
    console.log('los numeros son ' +contador)
    contador++;
}

let nota = 5;

if(nota >= 7){
    console.log('aprobado')
} else {
    console.log('reprobado')
}

let numAleatorio = Math.random();

console.log(numAleatorio);
console.log(Math.floor(Math.random()*1000)+1);