import React from "react";

const Card = (props) => {
  return (
    <div id="card">
      <img src={props.img} alt="" height={400} width={300} />
    </div>
  );
};

export default Card;
