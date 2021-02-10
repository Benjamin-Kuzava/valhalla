import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getListings } from "../../services/listings";
import { useState } from 'react';
import "./ListingDetail.css";

const ListingDetail = (props) => {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
      listings.forEach((listing) =>{
        console.log(listing)
      })
    };
    fetchListings();
  }, []);

  return (
    <Layout user={props.user}>
       <div className="image-container">
          
          <h3>Recommended Listings</h3>

        
          {allListings.map((listing) => (
            <div className="image-details">
            <img src={listing.imgURL} />
            <h3>{listing.name}</h3>
            <h3>{listing.price}</h3>
            </div>
          ))};
      </div>
    </Layout>
  );
};

export default ListingDetail;
