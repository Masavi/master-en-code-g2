// Pure function
const sumaUnoAlNumero = (numero) => numero + 1;
// console.log(sumaUnoAlNumero(7));

// Avoid side effect / Esta función tiene un efecto secundario
const sumaNumeroRandom = (numero) => numero + Math.random();
// console.log(sumaNumeroRandom(7));

var temperatura = 18;
const dimeTemperatura = () => `La temperatura es ${temperatura}`;
// console.log(dimeTemperatura());

// Function composition
const realizaOperacion = (a, b, operacion) => operacion(a, b);

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const mult = (a, b) => a * b;
const div = (a, b) => a / b;

// console.log(realizaOperacion(5, 3, suma));
// console.log(realizaOperacion(10, 7, resta));
// console.log(realizaOperacion(5, 5, mult));
// console.log(realizaOperacion(5, 5, div));

// Avoid mutating state
const sensei = Object.freeze({
  nombre: 'Gera',
  programa: 'Master en Coding',
  equipo: Object.freeze({
    modelo: 'ASUS',
    ram: 12
  })
});

sensei.nombre = 'Mali';
sensei.programa = 'Cinta Roja';
sensei.equipo.modelo = 'Macbook';
sensei.equipo.ram = 6;


console.log(sensei);