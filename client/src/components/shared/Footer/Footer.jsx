import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" className="footer-logo">
          <h1>Valhalla</h1>
      </Link>
      <div className="footer-text">
        <h4>Created Team :</h4>
        <img src="https://image.shutterstock.com/image-vector/github-vector-icon-apps-web-260nw-1835154331.jpg" width="20px" height="20px" />
         <a href="https://github.com/dantheman491" target="blank">Daniel Ramirez</a>
        <a href="https://github.com/vinod-git12" target="blank">Vinod Kumar</a>
        <a href="https://github.com/Benjamin-Kuzava/" target="blank">Benjamin Kuzava</a>
        <a href="https://github.com/DamionStewart0" target="blank"> Damion Stewart</a>
      </div>
      </div>
  )};

export default Footer;
