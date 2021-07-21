/**
 * Verificamos que D3 se está importando correctamente
 */
// console.log('Biblioteca de D3:', d3);

/**
 * Así es como cambiaríamos el color de fondo
 * usando javascript vanilla a través del DOM
 */
// const [body] = document.getElementsByTagName('body');
// console.log(body);
// body.style.backgroundColor = 'orange';

/**
 * Así cambiamos el color de fondo
 * usando d3 con dos simples métodos
 */

// d3.select('body').style('background-color', 'pink');

d3
  .select('body')
  .style('background-color', () => {
    return 'salmon';
  });

// d3
//   .selectAll('p')
//   .style('border', () => {
//     return '2px dotted white'
//   })
//   .style("color", () => {
//     return "hsl(" + Math.random() * 360 + ",100%,50%)";
//   });

// const dataSet = [3, 5, 7, 11, 13, 15, 21, 33, 55];

// d3
//   .selectAll('p')
//   .data(dataSet)
//   .style('font-size', (data) => {
//     return `${data}px`
//   })

const dataSet = [3, 5, 7, 11, 13, 15, 21, 33, 55];

d3
  .select('body') // Seleccionamos el body
  .selectAll('h3') // Seleccionamos todas las h3
  .data(dataSet) // Caragamos nuestros datos
  .enter() // Nos permite hacer "append" de elementos inexistentes (aun)
  .append('h3')
  .text((d) => {
    return `Soy el valor ${d}`
  })

/**
    Reto:
    Partiendo del siguiente arreglo de países
    const paises = [
      { nombre : 'mexico', porcentaje : 875, color: 'green'},
      { nombre : 'colombia', porcentaje : 763, color: 'yellow'}
      { nombre : 'bolivia', porcentaje : 663, color: 'red'}
      { nombre : 'perú', porcentaje : 913, color: 'blue'}
    ];
  
    Genera una gráfica de barras que muestre, cada barra del color que tiene cada objeto,
    y dentro de cada barra debe mostrarse un texto como el siguiente:

    'bolivia 663%'
    'colombia 763%'
 */

const paises = [
  { nombre : 'mexico', porcentaje : 87, color: 'green'},
  { nombre : 'colombia', porcentaje : 76, color: 'yellow'},
  { nombre : 'bolivia', porcentaje : 66, color: 'red'},
  { nombre : 'perú', porcentaje : 91, color: 'blue'}
];

// const porcentajes = paises.map((pais) => pais.porcentaje);
// console.log('hola', porcentajes);

d3
  .select('body')
  .selectAll('div')
  .data(paises)
  .enter()
  .append('div')
  .style('height', '40px')
  .style('background', (pais) => {
    return pais.color
  })
  .style('margin-bottom', '10px')
  .style('width', (pais) => {
    return `${pais.porcentaje}px`
  })
  .text((pais) => {
    return `${pais.nombre} ${pais.porcentaje}%`
  })


/**
 * Métodos estadísticos en D3.js
 * https://github.com/d3/d3/blob/main/API.md
 */

const numeros = [3, 5, 7, 11, 13, 1, 15, 21, 33, 55];

// console.log(d3.sum(numeros));
// console.log(d3.min(numeros));
// console.log(d3.minIndex(numeros));
// console.log(d3.max(numeros));
// console.log(d3.maxIndex(numeros));
// console.log(d3.extent(numeros));
// console.log(d3.mean(numeros));
// console.log(d3.median(numeros));

/**
 * Carga de datos CSV con D3
 * Existen dos formas de cargar/manejar datos de un CSV:
 */

// 1) Obtener elemento tras elemento del csv a través de un callback
// d3.csv('./CausasDeMortalidad.csv', (d) => {
//   console.log(d);
// });

// 2) Traer el arreglo completo con .then
// d3
//   .csv('./CausasDeMortalidad.csv')
//   .then((result) => {
//     // console.log(result);

//     // Ejercicio: Crear una gráfica de barras a partir de el resultado de los datos cargados desde el CSV "CausasDeMortalidad"
//     d3
//       .select('body')
//       .selectAll('div')
//       .data(result)
//       .enter()
//       .append('div')
//       .style('width', (d) => `${(d.Defunciones)}px` )
//       .style('background', 'yellowgreen')
//       .style('margin-bottom', '3px')
//       .text((d) => `${d.Defunciones} muertes por ${d.Causas} `)
//   })

/**
 * ESCALAS
 * 
 *  - Rangos: Conjunto de valores resultantes de una función
 * 
 *  - Dominios: Conjunto de valores con el que estamos trabajando
 */

// Se aplica a valores numéricos
const escalaLinear = d3.scaleLinear()
  .range([0, 100])
  .domain([0, 10000])

// Se aplican a datos categóricos, respetando el orden
const escalaOrdinal = d3.scaleOrdinal()
  .range(['purple', 'blue', 'gray'])
  .domain(['setosas', 'versicolor', 'virginica'])

// Le aplican un valor numérico a un conjunto de categorías
const escalaSegmento = d3.scaleBand()
  .range([0, 100])
  .domain(['lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sabado']);

  d3
    .csv('./CausasDeMortalidad.csv')
    .then((result) => result.map((r) => {
        return {
          nombre: r.Causas,
          noMuertes: parseInt(r.Defunciones),
        }
      })
    )
    .then((dataSet) => {
      dataSet.sort(
        (a, b) => (a.noMuertes > b.noMuertes)
          ? -1
          : 1
      )
      // console.log('Enfermedades Ordenadas', dataSet);

      const muertesArray = dataSet.map((d) => d.noMuertes); 
      const maxMuertes = d3.max(muertesArray);
      // const maxMuertes = d3.max(dataSet, (d) => d.noMuertes)

      const lineal = d3.scaleLinear()
        .range([0, 100])
        .domain([0, maxMuertes])

      const scalaColor = d3.scaleLinear()
        .range(['white', 'yellow', 'orange', 'red'])
        .domain([0, maxMuertes / 4, maxMuertes / 2, maxMuertes]) 

      d3
        .select('body')
        .selectAll('section')
        .data(dataSet)
        .enter()
        .append('section')
        .style('width', (d) => `${lineal(d.noMuertes)}px`)
        .style('background-color', (d) => scalaColor(d.noMuertes))
        .style('margin-bottom', '3px')
        .text((d) => d.noMuertes)
    });