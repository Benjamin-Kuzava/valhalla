import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";
import ListingCards from "../../components/ListingCards/ListingCards";


const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div>
        <ListingCards />
      </div>
    </Layout>
  );
};

export default Home;
