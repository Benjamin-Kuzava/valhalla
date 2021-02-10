import React from "react";
import "./ListingCard.css";

const ListingCard = (props) => {
  const {imgURL, name, price} = props;

  return (
    <div className="listing-div">
      <img src={imgURL} />
      <h1>{name}</h1>
      <h2>{price }</h2>
    </div>
  );
};

export default ListingCard;
