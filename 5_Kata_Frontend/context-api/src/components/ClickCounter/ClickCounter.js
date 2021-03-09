import { useState } from 'react';
import './index.css';

const ClickCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h2>Click Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>¡Incrementar!</button>
    </div>
  );
}
 
export default ClickCounter;