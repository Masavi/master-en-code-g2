import React, { Component } from 'react';

class HolaMundo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texto: '¡Hola desde el componente!',
      edad: 0,
    }
  }

  componentDidMount() {
    console.log('Se montó el componente!');
    // Simulemos una petición a la base de datos
    setTimeout(
      () => {
        this.setState(
          {
            texto: 'Se actualizó...'
          }
        )
      },
      3000
    )
  }

  render() {
    console.log('RENDER');
    return (
      <React.Fragment> 
        <h1> Componente HolaMundo </h1>
        <h2> {this.state.texto} </h2>
      </ React.Fragment>
    );
  }
}

export default HolaMundo;
