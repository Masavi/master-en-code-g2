d3.csv('./autosVendidos2016.csv')
  .then((result) => result.map((d) => ({
    name: d.GRUPO,
    quantity: parseInt(d.CANTIDAD)
  })))
  .then((data) => {
    const chartWidth = 1900;
    const chartHeight = 600;

    data.sort((a,b) => a.quantity > b.quantity ? -1 : 1)
    // console.log(data);

    const margin = { top: 20, rigth: 20, bottom: 40, left: 45 };

    const width = chartWidth - margin.rigth - margin.left;
    const height = chartHeight - margin.top - margin.bottom;

    const maxQuantity = d3.max(data, (d) => d.quantity);

    const scalaY = d3.scaleLinear()
      .range([ height, 0 ])
      .domain([ 0, maxQuantity])

    const scalaX = d3.scaleBand()
      .rangeRound([0, width])
      .domain(data.map(d => d.name))
      .paddingInner(0.1)

    // Axis --> Ayuda a definir los ejes
    const xAxis = d3.axisBottom(scalaX);
    const yAxis = d3.axisLeft(scalaY);

    const svg = d3
      .select('body')
      .append('svg')
      .attr('width', chartWidth)
      .attr('height', chartHeight)
      .append('g')
      .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');

    svg
      .append('g')
      .attr('class', 'y axis')
      .call(yAxis)

    svg
      .append('g')
      .attr('class', 'x axis')
      .attr('transform', 'translate(0,' + height + ')')
      .call(xAxis)

    const rect = svg.selectAll('body')
      .data(data)
      .enter()
        .append('rect')
        .attr('x', (d) =>  scalaX(d.name))
        .attr('width', scalaX.bandwidth()) // Ancho de la barra
        .attr('y', (d) => scalaY(d.quantity))
        .attr('height',  (d) => height - scalaY(d.quantity))
        .attr('fill', 'steelblue')
        .attr('id', (d) => d.name.replace(' ', '-'))

    const tip = d3 // Creación del tip
      .tip()
      .attr('class', 'd3-tip')
      .html((event, d) => {
        return `${d.name}`
      })

    svg.call(tip); // Agrega mi objeto tip a el SVG

    rect
      .on('mouseover.tip', tip.show)
      .on('mouseout.tip', tip.hide)
      // RESPUESTA ACTIVIDAD
      .on('mouseover', (e, d) => {
        d3.select(`#${d.name}`.replace(' ', '-')).attr('fill', 'red')
      })
      .on('mouseout', (e, d) => {
        d3.select(`#${d.name}`.replace(' ', '-')).attr('fill', 'steelblue')
      })

  }).catch((err) => {
    console.log(err);
  });
