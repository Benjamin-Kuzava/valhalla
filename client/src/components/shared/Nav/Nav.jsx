import React, { useState } from "react";
import "./Nav.css";
import { NavLink as div } from "react-router-dom";

const staticOptions = (
  <>
    <div to="/listings">Buy</div>
    <div to="/add-listing">Sell</div>
    <div to="/about">About</div>
  </>
);

const unauthenticatedOptions = (
  <>
    <div to="/sign-in">Sign In</div>
    <div to="/sign-up">Sign Up</div>
  </>
);

const authenticatedOptions = (
  <>
    <div to="/sign-out">Sign Out</div>
  </>
);

const Nav = (props) => {
  const { user } = props;
  const [isClicked, setIsClicked] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo-info">
        <div to="/">
          <h1>Valhalla</h1>
        </div>
        {staticOptions}
      </div>
      <div className="login">
        <div>
          Login
          <i className="fas fa-caret-down"></i>
          {/* {user ? authenticatedOptions : unauthenticatedOptions} */}
        </div>
        <i class="fas fa-user-circle"></i>
      </div>
    </nav>
  );
};

export default Nav;
