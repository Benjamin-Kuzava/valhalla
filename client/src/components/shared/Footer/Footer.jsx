import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <Link to="/" >
          <h1 className="footer-h1">Valhalla</h1>
      </Link>
      <div className="footer-text">
        <h4 className="footer-h4">Created Team : </h4>
        <div>
          <a className="footer-a" href="https://github.com/dantheman491" target="blank"><i class="fab fa-github"></i>  &nbsp; Daniel Ramirez</a>
          </div>
        <a className="footer-a" href="https://github.com/vinod-git12" target="blank"><i class="fab fa-github"></i>  &nbsp; Vinod Kumar</a>
        <a className="footer-a" href="https://github.com/Benjamin-Kuzava/" target="blank"><i class="fab fa-github"></i>  &nbsp; Benjamin Kuzava</a>
        <a className="footer-a" href="https://github.com/DamionStewart0" target="blank"><i class="fab fa-github"></i>  &nbsp; Damion Stewart</a>
      </div>
      </div>
  )};

export default Footer;
