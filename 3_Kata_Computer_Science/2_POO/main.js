/* 
  Cuando una variable empieza con mayúscula
  se conoce como Pascal Case
*/
class Animal {
  /* 
    Se encarga de generar instancias, 
    siempre tiene que llamarse 'constructor'
  */
  constructor(nombre, tipo, numPatas) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.numPatas = numPatas;
  }

  comer(comida) {
    return `${this.nombre} está comiendo ${comida}!`;
  }
}



const animal = new Animal("Perro", 4, "Ayudante de Santa");

/*
 Como este objeto se genera a partir de una clase,
 se le conoce como INSTANCIA
*/
console.log(animal);

const gato = new Animal("Inceroar", "Gato Fuego", 2);
console.log(gato);