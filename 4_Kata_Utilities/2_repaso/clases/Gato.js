const Mascota = require('./Mascota');

class Gato extends Mascota {
    constructor(nombre, patas, colorOjos) {
      super(nombre, patas);
      this.vidas = 7;
      this.colorOjos = colorOjos;
    }
  
    ronronear() {
      return `Puuuuurrrrr`;
    }
  };

module.exports = Gato;