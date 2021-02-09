import React from "react";
import "./Nav.css";
import { NavLink } from "react-router-dom";

const alwaysShown = (
  <>
    <NavLink to="/listings">Buy</NavLink>
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
    <NavLink to="/add-listing">Sell</NavLink>
    <NavLink to="/sign-out">Sign Out</NavLink>
  </>
);

const Nav = (props) => {
  const { user } = props;

  return (
    <nav>
      <NavLink to="/">Valhalla</NavLink>
      <div className="links">
        {alwaysShown}
        {user ? authenticatedOptions : unauthenticatedOptions}
      </div>
    </nav>
  );
};

export default Nav;
