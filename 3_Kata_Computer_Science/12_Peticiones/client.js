const request = require('request');

console.log("Empezando petición...");

request.get('https://www.google.com', (err, response, body) => {
  console.log(response.statusCode);
  console.log(body);
});

console.log("Terminó la petición!");

/*
  CREATE
  READ -> GET
  UPDATE
  DELETE
*/