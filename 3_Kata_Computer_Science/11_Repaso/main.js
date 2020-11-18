// Async
const miFuncion = () => { return 'Hola, soy la funcion'; }

/*
  El FOR represante un cuello de botella
  por ser síncrono
*/
// console.log(1);
// console.log(2);
// for (let i = 0; i < 10000; i++) {
//   console.log("For en el indice: ", i);
// }
// console.log(miFuncion());
// /*
//   Las cosas asíncronas nos permiten
//   evitar cuellos de botella
// */
// setTimeout(() => { console.log(3) }, 3000);
// console.log(4);
// console.log(5);

/*
  ¿Cómo funciona la cola de callbacks?
*/

// const despuesDeMil = () => {
//   console.log("Primer timeout!");
// };

// const despuesDeQuinientos = () => {
//   console.log("Segundo timeout!");
// }

// const despuesDeDoscientos = () => {
//   console.log("Tercer timeout!");
// }

// console.log("Inicio");
// setTimeout(despuesDeMil, 1000);
// setTimeout(despuesDeQuinientos, 500);
// setTimeout(despuesDeDoscientos, 200);
// setTimeout(() => { console.log("Ya!") }, 0);
// console.log("Fin");

/*
  Callbacks & Higher Order Functions
*/

/* 
 setTimeout recibe:
  1) Un callback
  2) Tiempo que debe esperar antes de ejecutar el callback
*/

// setTimeout es una función de orden superior 
// porque recibe un callback como argumento
// setTimeout(() => {}, 2000);


/*
  Caso didácticto y cero práctico
*/

const texto = "texto";
const booleano = true;
const miOtraFuncion = () => {};

const ejecutaOperacionConDosNumeros = (num1, num2, operacion) => {
  console.log("Hora de ejecutar la operación!");
  return operacion(num1, num2);
};

const sumarDosNumeros = (a, b) => a + b;

const resultado = ejecutaOperacionConDosNumeros(5, 7, (x, y) => x-y);
console.log(resultado);
