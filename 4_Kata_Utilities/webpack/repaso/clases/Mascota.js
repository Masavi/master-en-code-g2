class Mascota {
    // Método especial
    // Todas las clases lo tienen
    // Es lo primero en ejecurtarse, cuando se haga una instancia
    constructor(nombre, patas) {
      this.nombre = nombre;
      this.patas = patas;
    }
  
    comer() {
      return `${this.nombre} está comiendo.`;
    }
}

// Commonjs
module.exports = Mascota;