import React from "react";
import ImageSlider from "../../components/ImageSlider/ImageSlider";
import Layout from "../../components/shared/Layout/Layout";
import "./Home.css";
import ListingCards from "../../components/ListingCards/ListingCards";

const Home = (props) => {
  return (
    <Layout user={props.user}>
      <div id="home-container">
        <div className="slider-container">
          <ImageSlider />
        </div>
        <div className="about-container">
          <div className="about-info-container"></div>
          <p>
            we sell islands because why not? Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Neque, reprehenderit alias ullam non
            perspiciatis fugit odio aliquid itaque sint dolor beatae sed?
            Voluptatem dicta, consequuntur deleniti adipisci a dolores cumque.
          </p>
        </div>
        <div className="branding-container">
          <p>
            branding info buy an island beacuse all the cool rich people are
            doing it. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Enim ab ratione impedit atque itaque laudantium.
          </p>
          <div className="branding-info-container"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
