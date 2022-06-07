import React from "react";

const Card = (props) => {
  return (
    <div id="card">
      <div className="card-inner">
        <div className="card-front">
          <img src={props.img} alt="" height={400} width={300} />
        </div>
        <div className="card-back">
          <h1>{props.title}</h1>
          <p>{props.content}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
