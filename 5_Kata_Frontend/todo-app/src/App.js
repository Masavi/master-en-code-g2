import React from 'react';
import './App.css';
import HolaMundo from './components/HolaMundo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        Todo App
        <HolaMundo texto="Hola desde App.js" />
      </header>
    </div>
  );
}

export default App;
