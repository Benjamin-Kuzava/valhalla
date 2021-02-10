import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div id="home-container">
        <ImageSlider />
        <h1>Home</h1>
      </div>
    </Layout>
  );
};

export default Home;
