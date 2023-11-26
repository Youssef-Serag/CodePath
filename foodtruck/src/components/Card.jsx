import React from "react";
import '../App.css';

const Card = (props) => {

    return (
        <div className="card">
            <img src={props.path} className="card-img"></img>
            <h3 className="card-h4">{props.name}</h3>
            <h4 className="card-h4">{props.cuisine}</h4>
            <a href={props.link}>
                <button>
                    View Menu
                </button>
            </a>
        </div>
    )
}

export default Card;