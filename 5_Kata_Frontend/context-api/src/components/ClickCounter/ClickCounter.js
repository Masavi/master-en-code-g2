import React from 'react';
import './index.css';

const ClickCounter = (props) => {
  const { count, incrementCounter } = props;

  return (
    <div className="container">
      <h2>Click Counter: {count}</h2>
      <button onClick={incrementCounter}>¡Incrementar!</button>
    </div>
  );
}
 
export default ClickCounter;