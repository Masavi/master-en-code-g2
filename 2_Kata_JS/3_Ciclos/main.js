// Variables
// Entradas
// Salidas
// Tipos de Datos

// Estructuras de Control - Condiciones

/*
  Estructuras de Control
  Ciclos For
*/

// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);

// if () {}

/*
    1) Iterador -> Variable de Control
    2) Condición de Iteración (Rango)
    3) Cómo modificamos la variable de control
*/

// for (var i = 0; i < 5; i++) {
//   console.log("Hola a todos");  // Iteración - Ciclo del Bucle - Vuelta - Repetición
//   console.log(i);
// }

// i < 11
// i <= 10 - Más fácil de leer (en este caso)

// Imprimir los números del 1 al 10 en consola
// for (var i = 1; i <= 10; i++) {
//   console.log(i);
// };

/*
  Siempre usaremos el === y no el ==
  "1" == 1
  true
  0 == false;
  true
  "1" === 1;
  false
  0 === false;
  false
*/

// ¿Cómo puedo mostrar los valores pares?

// Mediante el módulo %
// for (var i = 1; i <= 10; i++) {
//   // ¿El número al dividirlo entre dos, me da como residuo 0?
//   if (i%2 === 0) {
//     // Si me da cero, entonces lo muestro (porque es par)
//     console.log(i);
//   }
//   // Si no me da cero, entonces no lo muestro...
// };

// Mediante i+=2
// i = i + 2

// for (var i = 0; i <= 10; i+=2) {
//   console.log(i);
// };

/*
  Arreglos (Arrays)
  Listas

  Conjunto de datos ordenados
*/

var arreglo = [
  1, // Posición 0
  2, // Posición 1
  3, // Posición 2
  4, // Posición 3
  5  // Posición 4
];

// console.log(arreglo);
// console.log(arreglo[3], arreglo[0]);

// console.log(typeof arreglo); Es objeto... aunque suene raro...


/* 
  Lista de múltiples tipos de datos
*/

// Aunque podemos tener cualquier tipo de dato en un arreglo,
// lo conveniente es siempre manejar un mismo tipo de dato
var listaBiblioteca = [
  "José Emilio Pacheco",
  37,
  false
];

// console.log(listaBiblioteca);
// console.log(listaBiblioteca.length);

var frutas = [
  "mango",
  "uva",
  "platano",
  "carambola",
  "kiwi",
  "tamarindo",
  "durazno",
  "nispero",
  "granada",
  "lichi",
  "lulo",
  "aguacate"
];

// Hard coded - estática
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1]);

// código dinámico
for (var i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
};