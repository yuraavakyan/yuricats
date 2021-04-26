import "./styles.scss";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar.js";
import Images from "../images/ImagesContainer.js";
import loading from "../../img/loading.png";
import Welcome from "../welcome/Welcome";

const Main = () => {
  const { isLoading, sidebarActive, firstLoad } = useSelector((state) => state);

  return (
    <div className="main">
      <Welcome class={firstLoad ? "" : "none"} />

      <div className={firstLoad ? "none" : ""}>
        <Sidebar class={sidebarActive ? "side-active" : "side-notactive"} />
        <div className="content-wrapper">
          {isLoading ? (
            <div className="loading">
              <img src={loading} alt=""></img>
            </div>
          ) : (
            <Images />
          )}
        </div>
      </div>
    </div>
  );
};

export default Main;
