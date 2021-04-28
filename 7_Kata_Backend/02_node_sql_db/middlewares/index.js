module.exports = {
  /* 
    Un middleware es aquella función
    que tiene acceso a los objetos 
    req y res.

    Así el middleware puede modificar o validar
    datos que aparezcan en estos objetos y 
    responder inmediatamente al cliente.
  */
  showTime: (req, res, next) => {
    console.log('Timestamp: ', Date.now());
    console.log(req.method, req.url);
    next();
  },
} 