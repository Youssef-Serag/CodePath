import './App.css';
import Card from './components/Card';
import React from 'react';
import { useState } from 'react';

const App = () => {

  // This is the array of dictionaries that we will be using to store our flashcard information.
  let arrayOfObjects = [
    { 'Question': 'What is your name?', "Answer": 'Youssef' },
    { 'Question': 'What type of plant is there?', "Answer": 'Rose' },
    { 'Question': 'What is your name?', "Answer": 'Youssef' },
  ];

  // Need to add 2 useState hooks here

  // 1. For the next button

  // 2. For the previous button

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="App">
      <div className='container'>
        <h1>The Ultimate Plant Parent!</h1>
        <h2>How good of a plant parent are you? Test all of your planty knowledge here!</h2>
        <h4>Count is: {arrayOfObjects.length}</h4>
        <Card question={arrayOfObjects[0]['Question']} answer={arrayOfObjects[0]['Answer']} isFlipped={isFlipped} setIsFlipped={setIsFlipped} />

        {/* Add the next and previous buttons here */}
      </div>
    </div>
  )
}

export default App