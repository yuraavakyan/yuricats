import "./styles.scss";
import React, { useState, useEffect } from "react";
import Sidebar from "../sidebar/Sidebar.js";

const Main = () => {
  const url = "https://api.thedogapi.com/v1/breeds?attach_breed=2569";
  const [state, setState] = useState([]);
  useEffect(() => {
    fetch(url, {
      method: "get",
      headers: {
        "x-api-key": "073a146e-f6ac-43d7-a2cc-6e718e3b230d",
      },
    }).then((res) => res.json().then((res) => setState(res)));
  }, []);

  return (
    <div className="main">
      <Sidebar />
      <div className="main-part">
        <div className="grid-container">
          <div className="grid-item">
            <img src={state[0].image.url}></img>
          </div>
          <div className="grid-item">
            <img src={state[1]}></img>
          </div>
          <div className="grid-item">
            <img src={state[3]}></img>
          </div>
          <div className="grid-item">
            <img src={state}></img>
          </div>
          <div className="grid-item">
            <img src={state}></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
