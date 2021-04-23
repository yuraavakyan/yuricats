import "./styles.scss";
import React from "react";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar.js";
import Images from '../images/ImagesContainer.js';
import loading from '../../img/loading.png';

const Main = () => {
   const {isLoading, sidebarActive} = useSelector(state => state);

  return (
    <div className="main">
      <Sidebar class={sidebarActive?'side-active': 'side-notactive'}/>
      <div className="content-wrapper">
        {isLoading ? <div className="loading"><img src={loading}></img></div> : <Images />}
      </div>
    </div>
  );
};

export default Main;
