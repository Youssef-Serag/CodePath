import './App.css';
import Card from './components/Card';
import React from 'react';
import { useState } from 'react';

const App = () => {

  // This is the array of dictionaries that we will be using to store our flashcard information.
  let arrayOfObjects = [
    { 'Question': 'What is your name?', "Answer": 'Youssef' },
    { 'Question': 'What is the most common flower in the world?', "Answer": 'Roses' },
    { 'Question': 'What is a dandelion named after?', "Answer": 'From the French phrase "dents de lion."' },
  ];

  // Need to add 2 useState hooks here
  const [count, setCount] = useState(0);

  const [inp, setInp] = useState('');

  const [shade, setShade] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inp === arrayOfObjects[count]['Answer']) {
      setShade('correct');
      setInp('');
    }
    else {
      setShade('incorrect');
      setInp('');
    }
  };

  const nextQuestion = () => {
    if (count < arrayOfObjects.length - 1) {
      setCount(count + 1);
    }
    else {
      setCount(0);
    }
    setIsFlipped(false);
    setShade('');
  }

  const prevQuestion = () => {
    if (count > 0) {
      setCount(count - 1);
    }
    else {
      count(arrayOfObjects.length - 1);
    }
    setIsFlipped(false);
    setShade('');
  }

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="App">
      <div className='container'>
        <h1>The Ultimate Plant Parent!</h1>
        <h2>How good of a plant parent are you? Test all of your planty knowledge here!</h2>
        <h4>Count is: {arrayOfObjects.length}</h4>
        <Card question={arrayOfObjects[count]['Question']} answer={arrayOfObjects[count]['Answer']} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

        {/* Add the next and previous buttons here */}
        <form className='input-container' onSubmit={handleSubmit}>
          <h4>Guess the answer here:</h4>
          <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} id={shade}/>
          <button type='submit'>Submit your answer</button>
        </form>

        <div className='button-container'>
          <button onClick={prevQuestion} className='button'>⬅</button>
          <button onClick={nextQuestion} className='button'>➡️</button>
        </div>
      </div>
    </div>
  )
}

export default App