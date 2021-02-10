import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ListingCard from "../../ListingCard/ListingCard";
import Dropdown from "../Dropdown/Dropdown";
import "./Nav.css";

const Nav = ({ user }) => {
  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  return (
    <>
      <nav className="navbar">
        <NavLink to="/" className="navbar-logo">
          <h1>Valhalla</h1>
        </NavLink>
        <div className="menu-icon" onClick={handleClick}>
          <i className={click ? "fas fa-times" : "fas fa-bars"} />
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
              Buy
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/services"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              Sell
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/contact-us"
              className="nav-links"
              onClick={closeMobileMenu}
            >
              About
            </NavLink>
          </li>

          <li className="nav-item">
            <NavLink
              to="/sign-up"
              className="nav-links-mobile"
              onClick={closeMobileMenu}
            >
              Log in
            </NavLink>
          </li>
        </ul>
        <li
          className="nav-item login toggle"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          <NavLink
            to="/services"
            className="nav-links"
            onClick={closeMobileMenu}
          >
            {user ? "Profile " : "Log in "}
            <i className="fas fa-caret-down" />
          </NavLink>
          {dropdown && <Dropdown user={user} />}
        </li>
      </nav>
    </>
  );
};

export default Nav;
