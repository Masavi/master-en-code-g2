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
  Para que nuestro servidor empiece a escuchar peticiones, debemos ejecutar
  el método listen. Al ejecutar este método, express toma control total de 
  la terminal desde donde fue ejecutado el archivo "index.js"
*/
app.listen(PORT, () => console.log(`Listening on ${PORT}`));
