const bcrypt = require('bcrypt');
const SALT_FACTOR = 10; // La salt ayuda a generar una string aleatoria

module.exports = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_FACTOR, (saltErr, salt) => {
      if(saltErr) reject(saltErr);
      bcrypt.hash(password, salt, (hashErr, hash) => {
        if(hashErr) reject(hashErr);
        resolve(hash);
      });
    })
  })
}