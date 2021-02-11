import "./ListingCards.css";
import React, { useState, useEffect } from "react";
import { getListings } from "../../services/listings";
import ListingCard from "../ListingCard/ListingCard";

const ListingCards = (props) => {
  const [allListings, setAllListings] = useState([]);
  const { queriedListings } = props;

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  if (queriedListings.length > 0) {
    return (
      <div className="listcard">
        {queriedListings.map((listing) => (
          <ListingCard
            key={listing._id}
            id={listing._id}
            name={listing.name}
            description={listing.description}
            imgURL={listing.imgURL}
            price={listing.price}
          />
        ))}
      </div>
    );
  } else {
    return (
      <div className="listcard">
        {allListings.map((listing) => (
          <ListingCard
            key={listing._id}
            id={listing._id}
            name={listing.name}
            description={listing.description}
            imgURL={listing.imgURL}
            price={listing.price}
          />
        ))}
      </div>
    );
  }
};

export default ListingCards;
