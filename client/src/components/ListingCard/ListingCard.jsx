import React from "react";
import "./ListingCard.css";

const ListingCard = (props) => {
  const {imgURL, name, price} = props;

  return (
    <div className="listing-div">
      <img className="img-listing" src={imgURL}></img>
      <h1 className="h1-listing">{name}</h1>
        <h3 className="h3-listing">{price}</h3>
  </div>
  );
};

export default ListingCard;
