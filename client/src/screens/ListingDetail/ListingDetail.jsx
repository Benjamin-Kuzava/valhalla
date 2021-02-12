import React from "react";
import { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import {
  getListings,
  getListing,
  deleteListing,
} from "../../services/listings";
import "./ListingDetail.css";
import { useParams, Redirect, Link } from "react-router-dom";
import ListingEdit from "../../screens/ListingEdit/ListingEdit"


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
  }, []);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  const recIslands = allListings.slice(3, 7);

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
              <button className="edit-button"><Link className="edit-link1" to={`/edit-listing/${listing._id}`}>Edit</Link></button>
              <button className="delete-button" onClick={() => handleDelete()}>
                Delete
              </button>
            </div>
          )}
        </div>
      </section>
      <div className="recommended-container">
        <h1 className="recommended-title">Recommended Listings</h1>
        <div className="image-container">
          {recIslands.map((listing) => {
            return (
              <div className="image-details" key={listing._id}>
                <img src={listing.imgURL} className="recommended-images" />
                <h1 className="recommended-name">{listing.name}</h1>
                <h3 className="recommended-price">{listing.price}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </Layout>
  );
};

export default ListingDetail;
