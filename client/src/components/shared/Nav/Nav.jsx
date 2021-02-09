import React, { useState } from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const staticOptions = (
  <>
    <NavLink to="/listings">Buy</NavLink>
    <NavLink to="/add-listing">Sell</NavLink>
    <NavLink to="/about">About</NavLink>
  </>
);

const unauthenticatedOptions = (
  <>
    <NavLink to="/sign-in">Sign In</NavLink>
    <NavLink to="/sign-up">Sign Up</NavLink>
  </>
);

const authenticatedOptions = (
  <>
    <NavLink to="/sign-out">Sign Out</NavLink>
  </>
);

const Nav = (props) => {
  const { user } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-info">
        <NavLink to="/">
          <h1 className="title">Valhalla</h1>
        </NavLink>
        <div className="info-links">
          {staticOptions}
          </div>
      </div>
      <div className="login">
        <div>
          Login
          <i className="fas fa-caret-down"></i>
        </div>
        {/* {user ? authenticatedOptions : unauthenticatedOptions} */}
        <i class="fas fa-user-circle"></i>
      </div>
    </nav>
  );
};

export default Nav;
