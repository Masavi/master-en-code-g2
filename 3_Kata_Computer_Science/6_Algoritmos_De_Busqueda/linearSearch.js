/*
  El algoritmo de búsqueda lineal recibe como argumentos

       ENTRADAS
  1) Lista con elementos
  2) Elemento o item a buscar

       SALIDAS
  Este algoritmo devuelve
    si encuentra el elemento, la posicion (numero)
    si no encuentra el elemento, devuelve -1
*/

/*
const linearSearch = (list, itemToFind) => {
  
    Hallamos el tamaño de la lista
    Definir el índice desde dónde vamos a iterar

    index; -> desde donde iteramos
    size; -> hasta donde iteramos

    mientras index < size
      if list[index] === itemToFind
        si sí -> return index
        si no -> index + 1;

    return -1
  
}
*/

const linearSearch = (list, itemToFind) => {
  const size = list.length;
  let index = 0;

  while(index < size) {
    let itemInPosition = list[index];
    if (itemInPosition === itemToFind) {
      return index;
    }
    index++;
  }

  return -1;
}

const myList = [19, 12, 4, 89, 666, 10, 42, 41, 5, 333, 5, 5, 5, 5];

const result = linearSearch(myList, 5);

if (result >= 0) console.log('¡Sí existe!');
if (result === -1) console.log('No existe...');
