import React, { useState, useEffect } from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Listings.css";
import { getListings } from "../../services/listings";
import ListingCards from "../../components/ListingCards/ListingCards";
import Search from "../../components/Search/Search";
import "../../components/Search/Search.css";


const Listings = (props) => {
  const [allListings, setAllListings] = useState([]);
  const [queriedListings, setQueriedListings] = useState([]);

  useEffect(() => {
    const fetchListings = async () => {
      const listings = await getListings();
      setAllListings(listings);
    };
    fetchListings();
  }, []);

  const handleSearch = event => {
    // event.preventDefault()
    const newQueriedListings = allListings.filter(listing => {
      if (listing.name.toLowerCase().includes(event.target.value.toLowerCase())) {
        return true
      }
    })
    setQueriedListings(newQueriedListings);
  }

  //const handleSubmit = event => event.preventDefault()
  return (
    <Layout user={props.user}>
      <div >
        {/* <Search setQueriedListings={setQueriedListings} handleChange={ handleSearch}/> */}
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
      </form> 
    </div>
        
        <ListingCards queriedListings={queriedListings}/>
        
      </div>
    </Layout>
  );
};

export default Listings;
