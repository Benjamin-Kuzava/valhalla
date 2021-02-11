import React, {useState} from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingCreate.css";


const ListingCreate = (props) => {
  const [listing, setListing] = useState(
    {
      name: "",
      imgURL: "",
      description: "",
      price: "",
    })
  const [isCreated, setIsCreated] = useState(false);
  return (
    <Layout user={props.user}>
      <div>
        <h1>Create</h1>
      </div>
    </Layout>
  );
};

export default ListingCreate;
