import './index.css';

const HoverCounter = (props) => {
  const { count, incrementCounter } = props;

  return (
    <div onMouseOver={incrementCounter} className="hover-container">
      <h2>Hover Counter: {count} </h2>
    </div>
  );
}
 
export default HoverCounter;