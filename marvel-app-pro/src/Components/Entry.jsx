import React from "react";
import "../index.css";
import { Link } from "react-router-dom";

const Entry = ({ id, name, thumbnail, imageExtension, comics, series }) => {
  const thumbnailUrl = `${thumbnail}.${imageExtension}`;

  return (
    <div className="entry">
      <Link style={{ color: "White" }} to={`/AvengerDetails/${name}/${id}`}>
        <div className="column name">{name}</div>
      </Link>
      <div className="column comics">{comics}</div>
      <div className="column series">{series}</div>
      <div className="column thumbnail">
        <img src={thumbnailUrl} alt={`Thumbnail of ${name}`} />
      </div>
    </div>
  );
};

export default Entry;
