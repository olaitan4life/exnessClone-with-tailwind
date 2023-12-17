import React from "react";

const Card = ({ img, text, text1, text2 }) => {
  return (
    <div>
      <img src={img} alt="" />
      <p>{text}</p>
      <p>{text1}</p>
      <a href="#">{text2}</a>
    </div>
  );
};

export default Card;
