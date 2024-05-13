// import React from 'react';
// import useCounter from './useCounter';

// const CounterTwo = () => {
//   const { count, handleDecrement, handleIncrement, handleReset } = useCounter(
//     20,
//     30
//   );
//   return (
//     <>
//       <p>Counter 2 ! {count} </p>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
//       <button onClick={handleReset}>RESET</button>
//     </>
//   );
// };

// export default CounterTwo;

import React from 'react';
import CounterHoc from './CounterHoc';

const CounterThree = ({ count, increment, decrement, reset }) => {
  return (
    <>
      <p>Counter 3 ! {count} </p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default CounterHoc(CounterThree, 70, 90);
