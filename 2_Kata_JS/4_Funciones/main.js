// Declarando a la función
function myFunction() {
  console.log("MyFunction");
  return "Master en Coding";
}

// Estamos invocando a la función
// myFunction();

function transformaMayus(texto) {
  var resultado = texto.toUpperCase();
  return resultado;
}

var nombre = "Gera";
var x = transformaMayus(nombre);
// console.log(transformaMayus(nombre));
// console.log(x);

// Siempre usa camelCase
// Usa nombres descriptivos
function fahrenheitToCelsius(f, city) {
  var celsius = Math.round((f - 32) / 1.8);
  var resultado = "En " + city + " la temperatura es " + celsius + "grados"
  return resultado;
}

// console.log(fahrenheitToCelsius(68, "Querétaro"));
// console.log(fahrenheitToCelsius(80, "Monterrey"));
// console.log(fahrenheitToCelsius(110, "Hermosillo"));

// ----------------------------------------------------------------
// Scope => Contexto de ejecución

// Variable global

// SCOPE CHAIN
var fruta = "Kiwi";

function comer() {
  var fruta = "Piña";
  return "Estoy comiendo " + fruta;
}

function lavar() {
  var fruta = "Sandía";
  if(true) {
    var fruta = "Moras";
    return "Estoy lavando una " + fruta;
  }
}

console.log(comer());
console.log(lavar());

console.log(this);
