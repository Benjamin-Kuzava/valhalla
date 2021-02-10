import React from "react";
import "./ListingCard.css";

const ListingCard = (props) => {
  const {imgURL, name, price} = props;

  return (
    <div className="listing-div">
      <img src={imgURL}></img>
      <h1>{name}</h1>
        <h3>{price}</h3>
  </div>
  );
};

export default ListingCard;
