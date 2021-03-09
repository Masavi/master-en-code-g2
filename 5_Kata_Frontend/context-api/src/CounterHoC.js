

const CounterHoC = (Component) => {
  let count = 0;
  let setCount = (newCount) => { count = newCount }
  return ({ ...props }) => {
    return <Component
      count={count}
      setCount={setCount}
      {...props}
    />
  }
}

export default CounterHoC;
