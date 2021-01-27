import React from 'react';

class Counter extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            count: 10
        }

    }
    render() {
        return (<>
            <h4>{this.state.count}</h4>
            <button onClick={() => { this.setState({count: this.state.count + 1 }) }}>Sumar</button>
        </>)
    }
}

export default Counter;