import React, { useState } from 'react';

const useCounter = (initialValue = 0, steps = 0) => {
  const [count, setCount] = useState(initialValue);
  const handleIncrement = () => {
    setCount((prevcount) => prevcount + steps);
  };
  const handleDecrement = () => {
    setCount((prevcount) => prevcount - steps);
  };
  const handleReset = () => {
    setCount(initialValue);
  };
  return { count, handleDecrement, handleIncrement, handleReset };
};

export default useCounter;
