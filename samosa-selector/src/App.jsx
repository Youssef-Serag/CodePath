import './App.css';
import samosa from './samosa.jpg'
import React from 'react';
import {useState} from 'react';
const App = () => {

  const [count, setCount] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  
  // Function that updates the count variable.
  const updateCount = () => setCount(count + multiplier);

  // Function that updates the multiplier variable.
  const buyDoubleStuffed = () => {
    if (count >= 10) {
      setCount(count - 10);
      setMultiplier(multiplier * 2);
    }
  }

  const buyPartyPack = () => {
    if (count >= 100) {
      setCount(count - 100);
      setMultiplier(multiplier * 5);
    }
  }

  const buyFullFeast = () => {
    if (count >= 1000) {
      setCount(count - 1000);
      setMultiplier(multiplier * 10);
    }
  }

  return (
    <div className="App">
      <h1>Samosa Selector</h1>
      <h2>Count: {count}</h2>
      <img className='samosa' src={samosa} onClick={updateCount} />
      <div className='container'>
        <div className='upgrade'>
          <h3>
            Double Stuffed
          </h3>
          <p>
            2x per click
          </p>
          <button className='button' onClick={buyDoubleStuffed}>
            Cost: 10 samosas
          </button>
        </div>
        <div className='upgrade'>
          <h3>
            Party Pack
          </h3>
          <p>
            5x per click
          </p>
          <button className='button' onClick={buyFullFeast}>
            Cost: 100 samosas
          </button>
        </div>
        <div className='upgrade'>
          <h3>
            Full Feast
          </h3>
          <p>
            10x per click
          </p>
          <button className='button' onClick={buyFullFeast}>
            Cost: 1000 samosas
          </button>
        </div>
      </div>
      {/* Creating the multiplier buttons */}
    </div>
  )
}

export default App