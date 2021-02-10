import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Listings.css";
import { getListings } from "../../services/listings";

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
        <h1>Listings</h1>
      </div>
    </Layout>
  );
};

export default Listings;
