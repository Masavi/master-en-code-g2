// Superclase / Clase padre
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

// Subclase / Clase hija
class Gato extends Mascota {
  constructor(nombre, patas, colorOjos) {
    super(nombre, patas);
    this.vidas = 7;
    this.colorOjos = colorOjos;
  }

  ronronear() {
    return `Puuuuurrrrr`;
  }
}

const gato = new Gato('Incineroar', 4, 'Azules');
console.log(gato);
console.log(gato.comer());
console.log(gato.ronronear());

console.log('---------------------------------');

class Camaleon extends Mascota {
  constructor(nombre, patas) {
    super(nombre, patas);
    this.color = 'verde';
  }

  setColor(nuevoColor) {
    this.color = nuevoColor;
  }
}

const camaleon = new Camaleon('Rango', 4);
console.log(camaleon);
console.log(camaleon.comer());
camaleon.setColor('rojo');
console.log(camaleon);
