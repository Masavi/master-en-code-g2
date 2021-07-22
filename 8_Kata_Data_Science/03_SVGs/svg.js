/**
 *  Creación de SVG (Scalable Vector Graphics)
*/ 

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', '500px')

  const data = ['circulo_1', 'circulo_2']

  svg
    .selectAll('circle')
    .data(data)
    .enter()
    .append('circle')
    .attr('cx', (d, i) => {
      return 200 * (i + 1)
    })
    .attr('cy', 70)
    .attr('r', 70)
    .attr('id', (d) => d)
    .style('fill', 'purple')

/**
 * 
 * Eventos
 * - Selecionar que elemento quiero para agregar un evento
 * - Escuchar un evento con "on" y obtener un callback
 */

svg.select('#circulo_1')
    .on('click', (e, d) => {
      alert(`Le diste click a: ${d}`)
    });

svg.select('#circulo_2')
    .on('mouseover', () => {
      svg.select('#circulo_2')
        .style('fill', 'yellow')

/**
 *    Actividad:
 *    Cuando quitemos el mouse, debe regresar a morado
 */
    }).on('mouseout', () => {
      svg.select('#circulo_2')
      .style('fill', 'purple')
    })
