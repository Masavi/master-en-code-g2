/*
  Prerequisitos:
    1) Debes contar con una lista previamente ordenada

  Entradas:
    1) Una lista ordenada
    2) El elemento a encontrar en la lista

  Salidas:
    Si el elemento existe
      si sí, retornamos el índice donde se encontró
      si no, retornamos un -1 
*/

/*
  Pseudocodigo:

  itemToFind = elemento a buscar en la lista
  min = el inicio de la lista (usualmente posición 0)
  max = el largo de la lista - 1

  mientras min <= max
    middle = truncarHaciaAbajo((min + max) / 2)
    guess = lista[middle]

    if (itemToFind === guess) {
      return middle
    }
          17           5
    if (itemToFind > guess) {
      min = middle + 1
    }
            17         21
    if (itemToFind < guess) {
      max = middle - 1
    }
  
  return -1
*/

const binarySearch = (orderedList, itemToFind) => {
  let min = 0,
      max = orderedList.length - 1,
      middle = null,
      guess = null;
  
  while(min <= max) {
    middle = Math.floor((min + max) / 2);
    guess = orderedList[middle];

    if (itemToFind === guess) {
      return middle;
    }

    if (itemToFind > guess) {
      min = middle + 1;
    }

    if (itemToFind < guess) {
      max = middle - 1;
    }
  }

  return -1;
}

const myList = [4, 7 , 10, 11, 55, 71, 89, 100, 2020];

const result = binarySearch(myList, 10);

if (result >= 0) console.log(`¡Sí existe! se encuentra en la posición ${result}`);
if (result === -1) console.log('No existe...');

/*
Existen diferentes usos para cada comilla y acento...
" O'Reily  "
' Él dijo "tomala!" '
`  `
´´
*/