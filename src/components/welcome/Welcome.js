import React from "react";
import { setFirstLoad } from "../../api/setFirstLoad";
import "./welcome.scss";
import logo from "../../img/wool-ball.png";

const Welcome = (props) => {
  const getStarted = () => {
    setFirstLoad();
  };

  return (
    <section className={`welcome ${props.class}`}>
      <div className="welcome-wrapper">
        <div className="welcome-text">
          <div className="title">
            <div className="welcome-first">Welcome to</div>
            <div className="logo-div">
              <div className="welcome-logo">
                <img src={logo} alt=""></img>
              </div>
              <div className="welcome-logo">CatPics</div>
            </div>
          </div>
          <p className="description">
            This is a simple web application, which allows you to surf some cat
            images. You can filter them by categories and get animated or static
            images
          </p>
        </div>
        <button className="get-started" onClick={getStarted}>
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Welcome;
