import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import Posts from './Posts';
import Albums from './Albums';
import Photos from './Photos';
import CounterOne from './CounterOne';
import CounterTwo from './CounterThree';
import CounterThree from './CounterTwo';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Posts />
      <hr />
      <Albums />
      <hr />
      <Photos />
      <hr />
      <CounterOne />
      <hr />
      <CounterTwo />
      <hr />
      <CounterThree />
    </>
  );
}

export default App;
