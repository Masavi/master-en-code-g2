/**
 * Gráfica de Planetas
 */

d3.csv('planetas.csv')
  .then((result) => result.map((d) => ({
    planet: d.planeta,
    distance: parseInt(d.kmDistanciaAlSol),
    diameter: parseInt(d.diametroKm)
  })))
  .then((data) => {
    const width = 2400;
    const height = 700;

    const maxDistance = d3.max(data, (d) => d.distance);
    const minDistance = d3.min(data, (d) => d.distance);
    
    const maxDiameter = d3.max(data, (d) => d.diameter)
    
    // Escalar
    const escalaDistancia = d3.scaleLinear()
      .range([10, width - 25])
      .domain([minDistance, maxDistance]);

    const escalaDiametro = d3.scaleLinear()
      .range([0, (width - 25)])
      .domain([0, maxDiameter])

    const color = d3.scaleOrdinal()
      .range(['#424E4C', '#7C5531', '#7BBBF0', '#CC522C', '#A67845', '#EBA340', '#75D6F1', '#2C73A9', '#FFFFF'])
      .domain(data.map((p) => p.planet))


    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', width)
      .attr('height', height)

    svg
      .selectAll('circle')
      .data(data)
      .enter()
      .append('circle')
      .attr('cx', (d) => escalaDistancia(d.distance))
      .attr('cy', height / 2)
      .attr('r', (d) => escalaDiametro(d.diameter / 10))
      .style('fill', (d) => color(d.planet))
      .attr('id', (d) => d.planet)

    console.log(data);  
  }).catch((err) => {
    console.log(err);
  });
