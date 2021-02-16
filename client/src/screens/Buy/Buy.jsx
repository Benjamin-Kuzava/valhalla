import React from "react";
import "./Buy.css";
import Layout from "../../components/shared/Layout/Layout";

export const Buy = (props) => {
  return (
    <Layout user={props.user}>
      <div className="about-us-container">
        <div className="paragraph">
          <h1 className="about-h1">Buying an Island </h1>
          <p>
            Thank you for your interest in a Valhalla property. The best way to
            reach out to us is to call 555-555-5555. Our realtors are ready,
            willing, and more than eager to get your slice of heaven.
          </p>
        </div>
        <div className="about-image">
          <img
            className="about-rich"
            src="https://images.pexels.com/photos/1450353/pexels-photo-1450353.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500https://images.pexels.com/photos/38238/maldives-ile-beach-sun-38238.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
          />
        </div>
      </div>
    </Layout>
  );
};
export default Buy;
