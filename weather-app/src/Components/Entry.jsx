import React from "react";
import "../index.css";

const Entry = ({ name, thumbnail, imageExtension, comics, series }) => {
  const thumbnailUrl = `${thumbnail}.${imageExtension}`;

  return (
    <div className="entry">
      <div className="column name">{name}</div>
      <div className="column comics">{comics}</div>
      <div className="column series">{series}</div>
      <div className="column thumbnail">
        <img src={thumbnailUrl} alt={`Thumbnail of ${name}`} />
      </div>
    </div>
  );
};

export default Entry;
