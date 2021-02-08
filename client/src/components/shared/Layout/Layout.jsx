import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";
import "./Layout.css";

const Layout = (props) => {
  return (
    <div className="layout-children">
      <Nav />
      {/* screens go below */}
      {props.children}
      <Footer />
    </div>
  );
};

export default Layout;
