/* 
  Express nos devuelve una función de alto nivel, que al ser ejecutada
  nos devuelve una aplicación de express. A esta aplicación comunmente
  la nombran "app".
*/
const express = require('express');
const app = express();

// También es común manejar el puerto del servidor desde una constante
const PORT = 3000;

/*
  Configuración de nuestro primer endpoint

  request -> contiene la información de petición de un cliente
  response -> contiene todo lo necesario para responderle a un cliente
*/
app.get('/', (request, response) => {
  response.send('¡Hola Mundo!');
});

app.get('/api/v1/docs', (request, response) => {
  response.send('Bienvenido a la documentación');
});

app.post('/api/v1/prueba', (req, res) => {
  console.log(req.query)
  if (req.query.codigo === '123') {
    return res.send("¡Se envió un código!")
  }
  return res.status(200).send('Este es el endpoint prueba');
});

/* 
  Esta es la dirección local de nuestra computadora:
  127.0.0.1 -> localhost

  Esta es la dirección local de nuestro backend (asumiendo que está corriendo en el puerto 3000)
  127.0.0.1:3000
  localhost:3000
*/

/* 
  Para que nuestro servidor empiece a escuchar peticiones, debemos ejecutar
  el método listen. Al ejecutar este método, express toma control total de 
  la terminal desde donde fue ejecutado el archivo "index.js"

  Todas las configuraciones de nuestra app de express deben ir antes de este método
  ESTE MÉTODO SIEMPRE VA HASTA EL FINAL
*/
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
