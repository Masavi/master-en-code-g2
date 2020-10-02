/*
  Entradas:
    1) Arreglo desordenado

  Salidas:
    1) Arreglo ordenado (de menor a mayor)
*/

const mergeSort = (unorderedArray) => {
  /*
    si el arreglo tiene 0 o 1 elementos
      retorno el arreglo, pues ya está ordenado

    obtenemos el tamaño del arreglo
      size = unorderedArray.length

    obtenemos el punto medio del arreglo
      middle = truncarHaciaAbajo(size / 2)
    
    Dividimos el arreglo en mitades a partir del punto medio
      left = unorderedArray.slice(0, middle);
      right = unorderedArray.slice(middle, size);

    Dividimos los arreglos recursivamente hasta obtener la unidad o un arreglo ordenado
      orderedLeft = mergeSort(left);
      orderedRight = mergeSort(right);

    Conquistamos mezclando los arreglos ordenados (orderedLeft y orderedRight)
      orderedArray = merge(orderedLeft, orderedRight);
  */
}

const merge = (orderedLeft, orderedRight) => {
  /*
    Necesitamos saber dónde estamos posicionados en el arreglo izquierdo
      indexLeft
    Necesitamos saber dónde estamos posicionados en el arreglo derecho
      indexRight
    Necesitamos un arreglo auxiliar donde estaremos insertando el nuevo orden
      auxArray

    Mientras (indexLeft < orderedLeft.length && indexRight < orderedRight)
      if (orderedLeft[indexLeft] < orderedRight[indexRight])
        auxArray.push(orderedLeft[indexLeft])
        leftIndex++
      else
        auxArray.push(orderedRight[indexRight])
        rightIndex++

    Antes de devolver la mezcla (merge), debemos concatenar los posibles excedentes
      resultArray = auxArray
        .concat(orderedLeft.slice(indexLeft))
        .concat(orderedRight.slice(indexRight))

    Retornamos resultArray
  */
}