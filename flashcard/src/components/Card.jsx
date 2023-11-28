import React from "react";

const Card = ({question, answer, isFlipped, setIsFlipped}) => {
  
  // using the useState
  const handleClick = () => setIsFlipped(!isFlipped);
  return (
    <div className="main-card" onClick={handleClick}>
      {isFlipped ? <h1>{answer}</h1>: <h1>{question}</h1>}
    </div>
  );
}

export default Card;