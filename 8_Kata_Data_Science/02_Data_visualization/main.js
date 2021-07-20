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
 * 
 * Reto:
 * 
 * Partiendo del siguiente arreglo de países
 * 
 * 
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