import React from "react";
import "../index.css";

const Card = ({ number, text }) => {
  return (
    <div className="card">
      <div className="card-text">{text}</div>
      <div className="card-number">{number}</div>
    </div>
  );
};

export default Card;
