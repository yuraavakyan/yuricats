import "./main.scss";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar.js";
import Images from "./components/images/ImagesContainer.js";
import Welcome from "./components/welcome/Welcome";

const Main = () => {
  const { sidebarActive, firstLoad } = useSelector((state) => state);

  return (
    <div className="main">
      {firstLoad ? (
        <Welcome />
      ) : (
        <>
          <Sidebar class={sidebarActive ? "side-active" : "side-notactive"} />
          <Images />
        </>
      )}
    </div>
  );
};

export default Main;
