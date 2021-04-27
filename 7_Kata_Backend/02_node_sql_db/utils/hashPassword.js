const bcrypt = require('bcrypt');
const SALT_FACTOR = 10; // La salt ayuda a generar una string aleatoria

/*
	Para entender el salt:
	Imagina que dos usuarios ocupan la misma contraseña "123". Sin un salt factor de por medio,
	el hash de encriptación que se generaría de ambas contraseñas sería el mismo.
	
	Así generamos hashes únicos.
	
	Te recomiendo buscar sobre "rainbow tables".
*/

module.exports = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(SALT_FACTOR, function(err, salt) {
      // HS256 --> WPA2
      if(err) reject(err);
      resolve(hash);
    })
  })
}