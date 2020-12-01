// commonJS la forma que corre node
// const greeting = require('./greeting');
// BAbel o ECMA2015 ecma6 la forma que corre node
import greeting from './greeting';
import './styles/style.scss';

// usar la función
console.log(greeting('generación 2'));
console.log(greeting('a todos los que vinieron hoy OnO'));

console.log(greeting('a los que ya instalaron babel y a los que lo harán'));