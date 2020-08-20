/* // var mover = true;  Asignación
var deberiaMoverse; // Definición

// console.log(deberiaMoverse == true);

var mover;
mover = prompt("¿Se mueve?"); // siempre me devuelve un string

// 1ra opción: "true" == "true"
if (mover == "true") { // si la condición se cumple
    // Volver a preguntar
    deberiaMoverse = prompt("¿Deberia moverse?");
    if(deberiaMoverse == "true") { // si la condición se cumple
        console.log('Arreglado');
    } else {
        console.log('Usa cinta de secuestrar gente');
        console.log('Arreglado');
    }
} else if(mover == "false") { // si la condición no de cumple
    //volver a preguntar
    deberiaMoverse = prompt("¿Deberia moverse?");
    if (deberiaMoverse == "true") {
        console.log("Usar desengrasante que parece pegamento");
        console.log("Arreglado");
    } else {
        console.log('Arreglado');
    }
} else {
    console.log('El valor no es uno de los permitidos');
} */

var edad = 18;

console.log(edad >= 18);

/* if (edad >= 18) {
    console.log("Puedes entrar");
} else {
    console.log('No puedes entrar');
} */

if (edad >= 18 && edad < 60) {
    console.log("Puedes entrar");
} else if (edad <= 15) {
    console.log('Voy a llamar a tus padres');
} else if( edad >= 60 ) {
    console.log('No se puede porque hay COVID');
} else if(edad > 15 && edad < 18){
    console.log('No puede entrar');
}

/* console.log('Voy a llamar a tus padres');
edad <=15 

edad >15
console.log('No puede entrar');
edad < 18

edad >= 18
console.log("Puedes entrar");
edad < 60

edad >= 60
console.log('No se puede porque hay COVID'); */

/*
========

EJERCICIOS

========
    1
========

Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, la suma de los tres números.

=========
    2
=========

Crea una aplicación web empleando JavaScript que permita a dos usuarios jugar una partida de piedra, papel o tijeras.

Pide al jugador1 y al jugador2 que escriban su elección mediante prompts. Compara los valores ingresados y muestra en pantalla, mediante un alert o console.log, quién fue el jugador ganador.

=========
    3
=========

Crea una aplicación web con JavaScript que reciba tres números digitados por el usuario, mediante prompts, y muestre en pantalla, mediante un alert, cuál es el mayor de los tres números.

*/

