import React from "react";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div>
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
