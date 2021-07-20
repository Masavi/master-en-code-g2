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