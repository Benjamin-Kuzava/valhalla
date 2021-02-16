import React, { useState, useEffect } from "react";
import "./UserListings.css";
import Layout from "../../components/shared/Layout/Layout";
import { getUser } from "../../services/user";
import ListingCard from "../../components/ListingCard/ListingCard";

const UserListings = (props) => {
  const [listings, setListings] = useState([]);

  useEffect(() => {
    const fetchUser = async () => {
      const id = props.user.id;
      const currentUser = await getUser(id);
      setListings(currentUser.listings);
    };
    fetchUser();
  }, []);

  const listingsJSX = listings.map((listing, index) => (
    <ListingCard
      id={listing._id}
      name={listing.name}
      imgURL={listing.imgURL}
      price={listing.price}
      key={index}
    />
  ));

  return (
    <Layout user={props.user}>
      <div className="listcard user-listings">{listingsJSX}</div>
    </Layout>
  );
};

export default UserListings;
