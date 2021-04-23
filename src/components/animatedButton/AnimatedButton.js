import React from "react";
import setAnimated from "../../api/setAnimated";
import "./styles.scss";

const AnimatedButton = (props) => {
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
    <div className={props.class}>
      <div className="switch-holder">
        <div className="inner-circle off" onClick={handleSwitch}></div>
      </div>
      Animated
    </div>
  );
};

export default AnimatedButton;
