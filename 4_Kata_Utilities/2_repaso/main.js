const Gato = require('./clases/Gato');
const Camaleon = require('./clases/Camaleon');

console.log('Hola soy el main');

const gato = new Gato('Incineroar', 4, 'Azules');
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

const camaleon = new Camaleon('Rango', 4);
console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor('rojo');
console.log(camaleon);