const jwt = require('jsonwebtoken');
const JWT_SECRET = 'mipasswordultrachido';

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
  verifyToken: async (req, res, next) => {
    const { authorization } = req.headers;
    // 'Bearer header.payload.token' -> ['Bearer', 'header.payload.token'] -> [1] -> 'header...'   
    try {
      const token = authorization.split(' ')[1];
      const decoded = jwt.verify(token, JWT_SECRET);
      req.user = decoded;
      next(); 
    } catch (error) {
      console.log(error);
      return res.status(401).json({ error: "unauthorized, you must provide Authorization as 'Bearer token'" });
    }
  }
} 