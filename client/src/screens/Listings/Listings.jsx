import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Listings.css";
import { getListings } from "../../services/listings";
import ListingCards from "../../components/ListingCards/ListingCards";
// import Search from "../../components/Search/Search";
import { AZ, ZA, lowestFirst, highestFirst } from "../../utilities/sort";
import "../../components/Search/Search.css";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Sort from "../../components/Sort/Sort";

const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [queriedListings, setQueriedListings] = useState([]);
  const [sortType, setSortType] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
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
    const newQueriedListings = allListings.filter((listing) => {
      if (listing.name.toLowerCase().includes(e.target.value.toLowerCase())) {
        return true;
      }
    });
    setQueriedListings(newQueriedListings, () => handleSort(sortType));
  };

  const handleSubmit = (e) => e.preDefault();
  return (
    <Layout user={props.user}>
      <div>
        {/* <Search setQueriedListings={setQueriedListings} handleChange={ handleSearch}/> */}
        <ImageSlider />
        <div>
          <form className="search-form">
            <input
              className="search-input"
              type="text"
              name="searchBar"
              id="searchbar"
              placeholder="search"
              // value={search}
              onChange={handleSearch}
            />
            <Sort onSubmit={handleSubmit} onChange={handleSort} />
          </form>
        </div>
        <ListingCards queriedListings={queriedListings} />
      </div>
    </Layout>
  );
};

export default Listings;
