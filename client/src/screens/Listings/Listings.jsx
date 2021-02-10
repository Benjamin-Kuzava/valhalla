import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Listings.css";
import { getListings } from "../../services/listings";
import ListingCards from "../../components/ListingCards/ListingCards";

const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);
  return (
    <Layout user={props.user}>
      <div>
      <ListingCards />
      </div>
    </Layout>
  );
};

export default Listings;
