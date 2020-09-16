// let y const

const programa = {
  nombre: "Master en Coding",
  sensei: "Mali"
}

let edad = 25;

programa.sensei = "Maui";
edad = 26;

console.log(programa);
console.log(edad);

// -------------------------------------------------
// Spread Operator & String Template

// Cuando definimos a la función
function master(programa, ...senseis) {
  console.log(`Bienvenda a ${programa}`);
  console.log(senseis);
  console.log(`Senseis: ${senseis[0]}, ${senseis[1]} y ${senseis[2]}`);
}

master("Master en Coding", "Mali", "Maui", "Gera");

// Cuando invocamos a la función
function suma(x, y, z) {
  console.log(x + y + z);
}

const numeros = [1, 2, 3];

suma(...numeros);

// -------------------------------------------------
// Arrow functions

// Manera tradicional
// function suma(a, b) {
//   return a + b;
// }

// ES6
const resta = (a, b) => a - b;

// Cuando solamente tenemos un parámetro
const cuadrado = x => x * x;

console.log(resta(2, 1));
console.log(cuadrado(5));