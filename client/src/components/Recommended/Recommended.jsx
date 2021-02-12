import React from "react";
import "./Recommended.css";
import { NavLink } from "react-router-dom";

const Recommended = (props) => {
  return (
    <div className="recommended-container">
      <h1 className="recommended-title">Recommended Listings</h1>
      <div className="image-container">
        {props.recIslands.map((listing) => {
          return (
            <div className="image-details" key={listing._id}>
              <NavLink to={`/listing/${listing._id}`}>
                <img src={listing.imgURL} className="recommended-images" />
                <h1 className="recommended-name">{listing.name}</h1>
                <h3 className="recommended-price">{listing.price}</h3>
              </NavLink>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Recommended;
