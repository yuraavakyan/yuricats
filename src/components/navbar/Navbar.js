import React from "react";
import "./styles.scss";
import dogLogo from "../../img/dog.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo-part">
          <div className="logo-pic">
            <img src={dogLogo} alt=""></img>
          </div>
          <div className="logo">Cat'sPic</div>
        </div>

        <div className="nav-links">
          <span className="nav-link">Home</span>
          <span className="nav-link">Filter</span>
          <span className="nav-link">About</span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
