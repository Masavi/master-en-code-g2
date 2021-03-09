import './index.css';

const ClickCounter = (props) => {
  const { count } = props;
  return (
    <div className="container">
      <h2>Click Counter: {count}</h2>
      {/* <button onClick={() => setCount(count + 1)}>¡Incrementar!</button> */}
    </div>
  );
}
 
export default ClickCounter;