import "./ListingCards.css";
import React, { useState, useEffect } from "react";
import { getListings } from "../../services/listings";
import ListingCard from "../ListingCard/ListingCard";



const ListingCards = () => {
  const [allListings, setAllListings] = useState([]);
  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);
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
};

export default ListingCards;
