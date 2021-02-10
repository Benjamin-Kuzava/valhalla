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
          <div className="about-info">
            <h2>What makes us different?</h2>
            <p>
              we sell islands because why not? Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Neque,{" "}
              <span className="highlight-light">reprehenderit alias</span> ullam
              non perspiciatis fugit odio aliquid itaque sint dolor beatae sed?
              Voluptatem dicta, consequuntur deleniti adipisci a dolores cumque.
            </p>
          </div>
        </div>
        <div className="explore-container">
          <div className="explore-info">
            <h2>Explore islands you'll never afford</h2>
            <p>
              branding info buy an island beacuse all the cool rich people are
              doing it. Lorem{" "}
              <span className="highlight-dark">ipsum dolor sit amet</span>{" "}
              consectetur adipisicing elit. Enim ab ratione impedit atque itaque
              laudantium.
            </p>
            <button className="explore-button">Explore</button>
          </div>
          <div className="explore-info-container"></div>
        </div>
      </div>
    </Layout>
  );
};

export default Home;
