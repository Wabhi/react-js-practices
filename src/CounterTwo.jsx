// import React from 'react';
// import useCounter from './useCounter';

// const CounterThree = () => {
//   const { count, handleDecrement, handleIncrement, handleReset } = useCounter(
//     30,
//     40
//   );
//   return (
//     <>
//       <p>Counter 3 ! {count} </p>
//       <button onClick={handleIncrement}>INCREMENT</button>
//       <button onClick={handleDecrement}>DECREMENT</button>
//       <button onClick={handleReset}>RESET</button>
//     </>
//   );
// };

// export default CounterThree;

import React from 'react';
import CounterHoc from './CounterHoc';

const CounterTwo = ({ count, increment, decrement, reset }) => {
  return (
    <>
      <p>Counter 2 ! {count} </p>
      <button onClick={increment}>INCREMENT</button>
      <button onClick={decrement}>DECREMENT</button>
      <button onClick={reset}>RESET</button>
    </>
  );
};

export default CounterHoc(CounterTwo, 40, 50);
