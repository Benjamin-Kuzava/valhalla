import React from "react";
import "./Search.css";
import { useState } from "react";


const Search = (props) => {
  const { handleChange, setQueriedListings } = props;
  const [search, setSearch] = useState([])

  return (
    <div>
      <form className="search-form">
        <input 
          className="search-input"
          type="text"
          name="searchBar"
          id="searchbar"
          placeholder="search"
          value={search}
          onChange={handleChange}
          />
      </form> 
    </div>
  );
};

export default Search;
