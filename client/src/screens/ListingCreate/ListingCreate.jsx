import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingCreate.css";

const ListingCreate = (props) => {
  return (
    <Layout user={props.user}>
      <div>
        <h1>Create</h1>
      </div>
    </Layout>
  );
};

export default ListingCreate;
