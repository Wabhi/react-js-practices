import React, { useState } from 'react';

const CounterHoc = (WrapperCompoenent, initialValue = 0, steps = 0) => {
  return (props) => {
    const [count, setCount] = useState(initialValue);
    const handleIncrement = () => {
      setCount((prevCount) => prevCount + steps);
    };
    const handleDecrement = () => {
      setCount((prevCount) => prevCount - steps);
    };
    const handleReset = () => {
      setCount(initialValue);
    };
    return (
      <WrapperCompoenent
        count={count}
        increment={handleIncrement}
        decrement={handleDecrement}
        reset={handleReset}
        {...props}
      />
    );
  };
};

export default CounterHoc;
