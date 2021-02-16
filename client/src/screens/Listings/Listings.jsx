import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Listings.css";
import { getListings } from "../../services/listings";
import ListingCard from "../../components/ListingCard/ListingCard";
import Search from "../../components/Search/Search";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utilities/sort";
import "../../components/Search/Search.css";
import ImageSlider2 from "../../components/ImageSlider/ImageSlider";
import Sort from "../../components/Sort/Sort";
import NewSlider from "../../components/ImageSlider/NewSlider";

const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [queriedListings, setQueriedListings] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = AZ(await getListings());
      setAllListings(listings);
      setQueriedListings(listings);
    };
    fetchListings();
  }, []);

  const handleSort = (type) => {
    setSortType(type);
    switch (type) {
      case "name-ascending":
        setQueriedListings(AZ(queriedListings));
        break;
      case "name-descending":
        setQueriedListings(ZA(queriedListings));
        break;
      case "price-ascending":
        setQueriedListings(lowestFirst(queriedListings));
        break;
      case "price-descending":
        setQueriedListings(highestFirst(queriedListings));
        break;
      default:
        break;
    }
  };

  const handleSearch = (e) => {
    const newQueriedListings = allListings.filter((listing) =>
      listing.name.toLowerCase().includes(e.target.value.toLowerCase())
    );
    setQueriedListings(newQueriedListings, () => handleSort(sortType));
  };

  const handleSubmit = (e) => e.preDefault();

  const listingsJSX = queriedListings.map((listing, index) => (
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
      <div>
        <NewSlider />
        <Search onSubmit={handleSubmit} onChange={handleSearch} />
        <Sort onSubmit={handleSubmit} onChange={handleSort} />
        <div className="listcard">{listingsJSX}</div>
      </div>
    </Layout>
  );
};

export default Listings;
