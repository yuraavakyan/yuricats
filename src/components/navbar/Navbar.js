import React, { useEffect } from "react";
import "./styles.scss";
import catLogo from "../../img/wool-ball.png";
import resetCategory from "../../api/resetCategory";
import setAnimated from '../../api/setAnimated';

const Navbar = () => {
  

  const handleRefresh = () => {
    resetCategory();
  };

  const handleSwitch = (event) => {
    const element = event.target.parentNode;
    if (element.classList.contains("on")) {
      element.classList.remove("on");
      element.classList.add("off");
      setAnimated(false);
    } else {
      element.classList.remove("off");
      element.classList.add("on");
      setAnimated(true);
    }
  };

  return (
    <nav className="navbar">
      <div className="nav-wrapper">
        <div className="logo-part" onClick={handleRefresh}>
          <div className="logo-pic">
            <img src={catLogo} alt=""></img>
          </div>
          <div className="logo">Cat'sPic</div>
        </div>

        <div className="nav-links">
          <div className="nav-link">
            <div className="switch-holder">
              <div className="inner-circle off" onClick={handleSwitch}></div>
            </div>
            Animated
          </div>
          <div className="nav-link">About</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
