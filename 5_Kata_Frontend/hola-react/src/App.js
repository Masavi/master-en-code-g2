import React from 'react';
import logo from './logo.svg';
import Counter from './Counter';
import './App.css';

class App extends React.Component {
  /*
  {
    "mali":"nali",
    "age": 22
  }
  */
  /* Este constructor lo comentamos gracias a un warning en la terminal cuando levantamos el server de react(corrimos react).
  constructor(props) {
   super(props);
  } */

  render() {
    return (
      // class HTMLElement className VirtualDom
      // <div className="App" style={{textAlign:"center"}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <Counter title="Hola Mundo React" init="0"/>
         {/*  <Counter title="El maravilloso primer contador" init="0"/>
          <Counter title="yei" init="0"/> */}
        </header>
      </div>
    )
  }
}
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
} */

export default App;
