import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import { getListings, getListing } from "../../services/listings";
import "./ListingDetail.css";
import { useParams } from "react-router-dom";

const ListingDetail = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [listing, setListing] = useState([]);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getListing(id);
      setListing(listing);
    };
    fetchListing();
  }, []);

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
      <section className="product-details">
        <div className="listing-image-container pd">
          <img
            src={listing.imgURL}
            alt={listing.name}
            className="listing-image"
          />
        </div>
        <div className="listing-details-container pd">
          <h2>{listing.name}</h2>
          <h5>{listing.price}</h5>
          <button className="buy-button">Buy Now</button>
          <p>{listing.description}</p>
        </div>
      </section>
      <div className="recommended-container pd"></div>

      {/* <div className="image-container">
        {recIslands.map((listing) => {
          return (
            <div className="image-details" key={listing._id}>
              <img src={listing.imgURL} />
              <h3>{listing.name}</h3>
              <h3>{listing.price}</h3>
            </div>
          );
        })}
      </div> */}
    </Layout>
  );
};

export default ListingDetail;
