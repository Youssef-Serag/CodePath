import React from "react";
import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <div className="Card">
      <Link to={"edit/" + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">{props.name}</h2>
      <h3 className="author">{props.age}</h3>
      <p className="author">{props.fav_color}</p>
      <Link to={"/details/" + props.id}>
        <button>Go to Details Page</button>
      </Link>
    </div>
  );
};

export default Card;
