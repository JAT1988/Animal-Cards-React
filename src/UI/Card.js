import React from "react";
import "../styleSheets/Card.css";

const Card = (props) => {
  return (
    <div className="card">
      <img
        src={`https://source.unsplash.com/500x400/?${props.name}​​​​​​​​`}
        alt={props.name}
      />
      <button onClick={props.removeCard} className="remove">
        x
      </button>
      <h3>{props.name}</h3>
      <div className="likes_container">
        <button onClick={props.removeLikes}>-</button>
        {props.likes >= 0 ? (
          <p className="likes">❤️ {props.likes}</p>
        ) : (
          <p className="likes">💔 {props.likes}</p>
        )}
        <button onClick={props.addLikes}>+</button>
      </div>
    </div>
  );
};

export default Card;
