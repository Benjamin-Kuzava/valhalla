import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingEdit.css";

const ListingEdit = (props) => {
  return (
    <Layout user={props.user}>
      <div>
        <h1>Edit</h1>
      </div>
    </Layout>
  );
};

export default ListingEdit;
