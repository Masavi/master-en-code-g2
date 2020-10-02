function mergeSort (unsortedArray) {
  if (unsortedArray.length <= 1) {
    return unsortedArray;
  }

  // Hallamos el tamaño del arreglo
  const size = unsortedArray.length;

  // Hallamos la mitad del arreglo
  const middle = Math.floor(size / 2);

  // Obtenemos las mitades
  const left = unsortedArray.slice(0, middle);
  const right = unsortedArray.slice(middle);

  // Dividimos hasta llegar a uno o tener un arreglo ordenado
  const sortedLeft = mergeSort(left);
  const sortedRight = mergeSort(right);

  // Vencemos, ordenando y mezclando ambos arreglos de 1 o arreglos previamente ordenados
  return merge(sortedLeft, sortedRight);
}

// Mezclamos ambos arreglos, izquierdo y derecho
function merge (left, right) {
  let resultArray = [], leftIndex = 0, rightIndex = 0;

  // Agregamos los valores de cada arreglo dentro de "resultArray" en orden
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      resultArray.push(left[leftIndex]);
      leftIndex++; // movemos hacia adelante el indice izquierdo
    } else {
      resultArray.push(right[rightIndex]);
      rightIndex++; // movemos hacia adelante el indice derecho
    }
  }

  // Concatenamos los excedentes. Si concatenamos arreglos vacíos, no se verán reflejados los vacíos
  const finalArray = resultArray
    .concat(left.slice(leftIndex))
    .concat(right.slice(rightIndex));
  
  return finalArray;
}

const result = mergeSort([1, 28, 3.1416, 37, 56, 0, 99, 7, 13, 190, 52, 77, 1, 83, 82, 11, 0, 507, 13, 360, 74, 68, 784]);

console.log(result);