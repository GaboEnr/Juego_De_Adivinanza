let diaSemana = prompt('Que dia de la semana es ?');
if(diaSemana == 'sabado' || diaSemana == 'domingo'){
    alert("¡ Buen fin de semana !");
} else{
    alert("A trabajar entonces perro!!");
}

let numeroUsuario = prompt('Ingresa un numero');
if(numeroUsuario > 0){
    alert("Haz ingresado un numero positivo ");
} else {
    alert("Numero negativo");
}

let puntuacion = 95;
if(puntuacion >= 100){
    alert('Felicidades, haz ganado');
} else {
    alert("Intentalo nuevamente");
}

let saldoUsuario = prompt("ingrese su saldo");
console.log(saldoUsuario);
alert(`Su saldo es ${saldoUsuario}`);

let nombre = prompt("Ingrese su nombre de usuario ");
alert(`Bienvenido Estimadisimo ${nombre}`);