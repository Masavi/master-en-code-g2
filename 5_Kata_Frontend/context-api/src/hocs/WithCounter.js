import { useState } from "react";

const WithCounter = (WrappedComponent) => {
  return function WithCounter(props) {
    const [count, setCount] = useState(0);

    const incrementCounter = () => {
      return setCount(count + 1);
    }

    return <WrappedComponent
      count={count}
      incrementCounter={incrementCounter}
      {...props} />
  }
}

export default WithCounter;
