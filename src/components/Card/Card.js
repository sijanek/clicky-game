import React from "react";
import "./Card.css"


function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt="bear" src={props.image}
        onClick={() => props.clickPicture(props.id)} />
      </div>
      
    </div>
  );
}

export default Card;
