// import React from 'react';
// import useCounter from './useCounter';

// const CounterOne = () => {
//   const { count, handleDecrement, handleIncrement, handleReset } = useCounter(
//     10,
//     20
//   );
//   return (
//     <>
//       <p>Counter 1 ! {count} </p>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
//       <button onClick={handleReset}>RESET</button>
//     </>
//   );
// };

// export default CounterOne;
import React from 'react';
import CounterHoc from './CounterHoc';

const CounterOne = ({ count, increment, decrement, reset }) => {
  return (
    <>
      <p>Counter 1 ! {count} </p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default CounterHoc(CounterOne, 20, 30);
