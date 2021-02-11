import React from "react";
import "./ListingCard.css";
import { NavLink } from "react-router-dom";

const ListingCard = (props) => {
  const { imgURL, name, price, id } = props;

  return (
    <div className="listing-div">
      <NavLink to={`/listing/${id}`}>
        <img className="img-listing" src={imgURL}></img>
        <h1 className="h1-listing">{name}</h1>
        <h3 className="h3-listing">{price}</h3>
      </NavLink>
    </div>
  );
};

export default ListingCard;
