const greeting = (name) => `Hola ${name}, bienvenido al ecma6`;

// Forma que lee Babel o ecma2015, o ecma6
export default greeting;
// Forma que lee node commonJS
// module.exports = greeting;


/*
// saludo.js
const greeting2 = (name) => `Hola ${name}, bienvenido al ecma6`;

 module.exports = {
    message: "Hola",
    greeting2
};

// destructuración
const objeto = { a: 8, b:3 };
const { b } = objeto;

// index.js     './saludo.js'
const { message, greeting2 }= require('ruta/del/archivo');
message // "Hola"
greeting2 // (name) => `Hola ${name}, bienvenido al ecma6`;
// commonJS */