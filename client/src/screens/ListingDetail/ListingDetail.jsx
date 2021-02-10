import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./ListingDetail.css";

const ListingDetail = (props) => {
  return (
    <Layout user={props.user}>
      <div>
        <h1>Detail</h1>
      </div>
    </Layout>
  );
};

export default ListingDetail;
