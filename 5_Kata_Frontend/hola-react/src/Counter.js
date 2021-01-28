/**
 * 1. El componente inicia con mayúscula.
 * 2. Siempre debemos de importar React
 * 3. El componente y el archivo se llaman igual.
 */
import React from 'react';
import './Counter.css';
// Un class-based component debe de heredar de React.Component
class Counter extends React.Component {
    // Ya que heredamos de una clase, tenemos un constructor
    constructor(props) { // { init: "valor-dado-en-el-padre"} si el valor
    // viene pasado entre commillas, será de tipo cadena/string
        // El constructor recibe de argumento los props:
        // Propiedades en el componente.
        // Atributos que asignamos cuando lo estamos llamando en un componente padre
        super(props);
        // el estado/state es la data que controla lo que se ve en la vista
        this.state = {
            count: parseInt(props.init),
        }
    }

    render() {
        return (<>
        {/* En jsx la apertura de llaves significa que dentro hay código de js que devuelve algo */}
        <h2>{this.props.title}</h2>
            <h4>{this.state.count}</h4>
            <div className="counter-container">
                <button className="counter-btn" onClick={() => { this.setState({ count: this.state.count + 1 }) }}>Sumar</button>
                <button
                    className="counter-btn"
                    // this state es la únic forma de modificar el estado
                    onClick={() => { this.setState({ count: this.state.count - 1 }) }}
                >
                    Restar
                </button>
            </div>
        </>)
    }
}

export default Counter;