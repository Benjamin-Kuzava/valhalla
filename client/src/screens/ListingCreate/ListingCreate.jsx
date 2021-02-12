import Layout from "../../components/shared/Layout/Layout";
import "./ListingCreate.css";
import React, { useState } from "react";
import { createListing } from "../../services/listings";
import { Redirect } from "react-router-dom";
import { NavLink } from "react-router-dom";

const ListingCreate = (props) => {
  const [listing, setListing] = useState({
    name: "",
    imgURL: "",
    description: "",
    price: "",
  });

  const [isCreated, setCreated] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setListing({
      ...listing,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const created = await createListing(listing);
    setCreated({ created });
  };

  if (isCreated) {
    return <Redirect to={`/listings`} />;
  }

  const { name, price, description, imgURL } = listing;
  return (
    <Layout>
      <div className="background">
        <div className="create-page"></div>
        <div className="create-container">
          <h3>Create A Listing</h3>
          <form onSubmit={handleSubmit}>
            <label>Name of Property</label>
            <input
              className="create-input"
              required
              type="text"
              name="name"
              value={name}
              placeholder="Enter Name of Property"
              onChange={handleChange}
            />
            <label>Price</label>
            <input
              className="create-input"
              required
              type="text"
              name="price"
              value={price}
              placeholder="Enter Price in USD"
              onChange={handleChange}
            />
            <label>Description</label>
            <input
              className="create-input"
              required
              name="description"
              value={description}
              type="text"
              placeholder="Description"
              onChange={handleChange}
            />
            <label>Image Link</label>
            <input
              className="create-input"
              required
              name="imgURL"
              value={imgURL}
              type="text"
              placeholder="Image URL"
              onChange={handleChange}
            />
            <button id="sign-in-button" type="submit">
              Create Listing
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
};
export default ListingCreate;
