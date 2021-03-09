import { useState } from 'react';
import './index.css';

const HoverCounter = () => {
  const [count, setCount] = useState(0);

  return (
    <div onMouseOver={() => setCount(count + 1)} className="hover-container">
      <h2>Hover Counter: {count} </h2>
    </div>
  );
}
 
export default HoverCounter;