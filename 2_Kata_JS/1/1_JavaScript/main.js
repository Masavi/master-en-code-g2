// Así mostramos en consola
// console.log("Hola Mundo");

// No ocurre nada con esto
"Hola Master en Code :D"; // String
5; // Number
3+2; // Number
"Maui"+"Mali"; // String
true; // Boolean
false; // Boolean
undefined; // Undefined
null; // Null
NaN // Not a Number

/*
  Salida - Output
*/

// console.log("Maui"+"Mali");

/* 
  Variables
*/

var saludo; // Declarar variable
saludo = "Hola a todos"; // Asignar un valor

// Declarar y asignar una variable
var respuestaAlaVidaElUniversoYTodoLoDemas = 42; // Variable nombrada usando Camel Case
var respuestalavidaeluniversoytodolodemas = 1; // Variable nombrada sin usar camel case...

// Al sumar texto y otro tipo de dato, se convierte todo a texto
/*
console.log(
  saludo
  + respuestaAlaVidaElUniversoYTodoLoDemas
);
*/
/*
console.log(
  respuestaAlaVidaElUniversoYTodoLoDemas + 10
);
*/

/*
  Entradas - Inputs
*/
// 1) Se ejecuta el prompt y me pide escribir algo
// prompt("Este es un ejemplo de entrada (input)");

// 2) El prompt devuelve o retorna lo que escribe el usuario
// "Chilaquil"

// 3) En vez de perder el texto en el espacio tiempo, podemos guardar lo que devuelve en una variable
// var entrada = prompt("Este es un ejemplo de entrada (input)");
var ejemplo;

// Aquí mandamos a salida una entrada
// console.log(entrada);
// console.log(typeof entrada);
// console.log(ejemplo);

/*
console.log("Texto", 1, true, ejemplo);
console.log("Texto" + 1 + true + ejemplo);
console.log(1 + true + ejemplo);
console.log(1 + true);
console.log(1 + ejemplo);
console.log(true + ejemplo);
*/

// console.log('b' + 'a' + + 'a' + 'a');

/*
  Operadores Aritmeticos
*/

// console.log(5 + 3);
// console.log(10 % 3) // 3 -> 1
// console.log(10 / 3) // 3 -> 1
var numeroDePokemones = 151;
// numeroDePokemones++;
// ++numeroDePokemones;
// console.log(numeroDePokemones++);
// console.log(++numeroDePokemones);

/*
  Operadores de Asignación
*/

var sensei = "Malinali";
// console.log(sensei);

/*
var comidasAlDia = 1;
console.log(comidasAlDia);

// comidasAlDia += 5;
comidasAlDia = comidasAlDia + 5;
console.log(comidasAlDia);

// comidasAlDia /= 3;
comidasAlDia = comidasAlDia / 3;

console.log(comidasAlDia);
*/

/* 
  Operadores Lógicos
  - Álgebra de proposiciones
  - Álgebra Booleana
    - Tablas de Verdad
*/

// AND (Y) Conjunción
console.log(true && true);
console.log(1 > 3 && 1 > 5);
console.log(1 > 0 && 1 > -1);

// OR (ò) Disyunción
console.log(true || false);
console.log(5 >= 4 || 3 <= 1);

// ! (Negación)
console.log(!true && true);
console.log(!(5 >= 4) || 3 <= 1);
 
// Usar paréntesis simplifica la lectura del código
// ((5 * 3) / (2 + 1) - 2);