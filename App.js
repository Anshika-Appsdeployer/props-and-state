import './App.css';
import A from './A';
import B from './B';
import React, { useState } from 'react';

function App() {
  const [countA, setCountA] = useState(0);
  const [countB, setCountB] = useState(0);

  return (
    <>
      <div class="box">
        <h1>App.js</h1>

        <A countA={countA}
          countB={countB} 
          setCountA={setCountA}
          setCountB={setCountB} />

        <B countA={countA}
          countB={countB} 
          setCountA={setCountA}
          setCountB={setCountB} />
      </div>
      
      <div class="A">
      <h2>A.js Buttons</h2>
      <p>Value of A on Increasing by 1: {countA}</p>
      <button onClick={() => setCountA(prev => prev + 1)}>Increment A</button>

      <p>Value of B on Increasing by 1: {countB}</p>
      <button onClick={() => setCountB(prev => prev + 1)}>Increment B</button>
      </div>

      <div class="B">
      <h2>B.js Buttons</h2>
      <p>Value of A on Decreasing by 1: {countA}</p>
      <button onClick={() => setCountA(prev => prev - 1)}>Decrement A</button>

      <p>Value of B on Decreasing by 1: {countB}</p>
      <button onClick={() => setCountB(prev => prev - 1)}>Decrement B</button>
      </div>
      </>
  );
}

export default App;
