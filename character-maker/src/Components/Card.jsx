import React from "react";
import { useState } from "react";
import "./Card.css";
import more from "./more.png";
import { Link } from "react-router-dom";
import { supabase } from "../client";

const Card = (props) => {
  const updateCount = async (event) => {
    event.preventDefault();

    await supabase
      .from("Posts")
      .update({ betCount: count + 1 })
      .eq("id", props.id);
  };

  return (
    <div className="Card">
      <Link to={"edit/" + props.id}>
        <img className="moreButton" alt="edit button" src={more} />
      </Link>
      <h2 className="title">{props.title}</h2>
      <Link to={"view/" + props.id}>View Details</Link>
    </div>
  );
};

export default Card;
