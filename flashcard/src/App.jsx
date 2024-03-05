import "./App.css";
import Card from "./components/Card";
import React from "react";
import { useState } from "react";

const App = () => {
  // This is the array of dictionaries that we will be using to store our flashcard information.
  let arrayOfObjects = [
    {
      Question: "What is the oldest flower in the world?",
      Answer:
        "The Montsechia vidalii, which lived 130 million years ago, is considered the oldest flower in the world.",
    },
    {
      Question: "What is the most common flower in the world?",
      Answer: "Roses",
    },
    {
      Question: "What is a dandelion named after?",
      Answer: 'From the French phrase "dents de lion."',
    },
    {
      Question: "What is the largest flower in the world?",
      Answer:
        "The Rafflesia arnoldii, also known as the “corpse flower,” can grow up to three feet in diameter and weigh up to 15 pounds.",
    },
    {
      Question: "What is the rarest flower in the world?",
      Answer:
        "The Ghost Orchid (Epipogium aphyllum) is one of the rarest flowers in the world.",
    },
    {
      Question: "What is the world's smallest flower?",
      Answer:
        "The Wolffia globosa, also known as the Asian watermeal, is considered the smallest flower in the world. It is only 0.3 mm long and 0.2 mm wide.",
    },
    {
      Question: "What is the most poisonous flower in the world?",
      Answer:
        "The Aconitum, also known as the “Queen of Poisons,” is considered the most poisonous flower in the world. It contains aconitine, which can cause respiratory failure and death.",
    },
    {
      Question: "What is the most important flower in the world?",
      Answer:
        "The sunflower is considered the most important flower in the world because it is a major source of food and oil for humans and animals.",
    },
    {
      Question: "What is the most expensive flower ever sold?",
      Answer:
        "The Juliet Rose, a new breed of rose that was developed in England in 2006.",
    },
    {
      Question: "What is the national flower of Japan?",
      Answer:
        "The cherry blossom is the national flower of Japan. It is a symbol of renewal and the fleeting nature of life.",
    },
  ];

  // Need to add 2 useState hooks here
  const [count, setCount] = useState(0);

  // const [inp, setInp] = useState("");

  const [shade, setShade] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (inp === arrayOfObjects[count]['Answer']) {
  //     setShade('correct');
  //     setInp('');
  //   }
  //   else {
  //     setShade('incorrect');
  //     setInp('');
  //   }
  // };

  // <form className='input-container' onSubmit={handleSubmit}>
  //         <h4>Guess the answer here:</h4>
  //         <input type='text' value={inp} onChange={(e) => setInp(e.target.value)} id={shade}/>
  //         <button type='submit'>Submit your answer</button>
  // </form>

  const nextQuestion = () => {
    if (count < arrayOfObjects.length - 1) {
      // set the count to a random number between 0 and the length of the array
      let x = Math.floor(Math.random() * arrayOfObjects.length);
      setCount(x);
    } else {
      let x = Math.floor(Math.random() * arrayOfObjects.length);
      setCount(x);
    }
    setIsFlipped(false);
    setShade("");
  };

  const prevQuestion = () => {
    if (count > 0) {
      let x = Math.floor(Math.random() * arrayOfObjects.length);
      setCount(x);
    } else {
      let x = Math.floor(Math.random() * arrayOfObjects.length);
      setCount(x);
    }
    setIsFlipped(false);
    setShade("");
  };

  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div className="App">
      <div className="container">
        <h1>The Ultimate Plant Parent!</h1>
        <h2>
          How good of a plant parent are you? Test all of your planty knowledge
          here!
        </h2>
        <h4>Count is: {arrayOfObjects.length}</h4>
        <Card
          question={arrayOfObjects[count]["Question"]}
          answer={arrayOfObjects[count]["Answer"]}
          isFlipped={isFlipped}
          setIsFlipped={setIsFlipped}
        />

        {/* Add the next and previous buttons here */}
        {/* The form information would go here */}
        <div className="button-container">
          <button onClick={prevQuestion} className="button">
            ←
          </button>
          <button onClick={nextQuestion} className="button">
            →
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
