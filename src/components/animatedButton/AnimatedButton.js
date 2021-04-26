import React from "react";
import { useSelector } from "react-redux";
import setAnimated from "../../api/setAnimated";
import { setSidebarStatus } from "../../api/setSidebarStatus";
import "./styles.scss";

const AnimatedButton = (props) => {
  const { animated } = useSelector((state) => state);

  const handleSwitch = () => {
    animated ? setAnimated(false) : setAnimated(true);
    setSidebarStatus(false);
  };

  return (
    <div className={props.class}>
      <div className={`switch-holder ${animated ? "on" : "off"}`}>
        <div className="inner-circle" onClick={handleSwitch}></div>
      </div>
      Animated
    </div>
  );
};

export default AnimatedButton;
