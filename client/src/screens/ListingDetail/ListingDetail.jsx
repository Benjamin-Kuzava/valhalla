import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getListings } from "../../services/listings";
import "./ListingDetail.css";

const ListingDetail = (props) => {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  const recIslands = allListings.slice(0, 4);
  

  return (
    <Layout user={props.user}>
      <div className="image-container">
        
        {recIslands.map((listing) => {
          return (
            <div className="image-details">
              <img src={listing.imgURL} />
              <h3>{listing.name}</h3>
              <h3>{listing.price}</h3>
            </div>
          );
        })}
      </div>
    </Layout>
  );
};

export default ListingDetail;
