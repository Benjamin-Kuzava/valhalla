import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import {
  getListings,
  getListing,
  deleteListing,
} from "../../services/listings";
import "./ListingDetail.css";
import { useParams, Redirect } from "react-router-dom";
import Recommended from "../../components/Recommended/Recommended";

const ListingDetail = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [listing, setListing] = useState([]);
  const [isUpdated, setIsUpdated] = useState(false);
  const params = useParams();
  const { id } = params;

  useEffect(() => {
    const fetchListing = async () => {
      const listing = await getListing(id);
      setListing(listing);
    };
    fetchListing();
  }, [id]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = getRandom(await getListings());
      setAllListings(listings);
    };
    fetchListings();
  }, [id]);

  const getRandom = (arr) => {
    let result = [];
    for (let i = 0; result.length < 4; i++) {
      let random = arr[Math.floor(Math.random() * arr.length)]; // grab a random listing
      if (random._id !== id && !result.includes(random)) {
        result.push(random);
      }
    }
    return result;
  };

  const recIslands = allListings.slice(0, 4);

  const handleDelete = async () => {
    await deleteListing(listing._id);
    setIsUpdated(!isUpdated);
  };

  if (isUpdated) {
    return <Redirect to="/listings" />;
  }

  return (
    <Layout user={props.user}>
      <section className="product-details">
        <div className="listing-image-container">
          <img
            src={listing.imgURL}
            alt={listing.name}
            className="listing-image"
          />
        </div>
        <div className="listing-details-container">
          <h2 className="detail-title">{listing.name}</h2>
          <h5>{listing.price}</h5>
          <button className="buy-button">Buy Now</button>
          <div className="details-container">
            <p className="detail-label">Details</p>
            <p className="detail-description">{listing.description}</p>
          </div>
          {props.user && (
            <div className="edit-buttons">
              <button className="edit-button">Edit</button>
              <button className="delete-button" onClick={() => handleDelete()}>
                Delete
              </button>
            </div>
          )}
        </div>
      </section>
      <Recommended recIslands={recIslands} />
    </Layout>
  );
};

export default ListingDetail;
