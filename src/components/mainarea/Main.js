import "./styles.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar.js";
import getImages from "../../api/getImages";
import setAmount from '../../api/setAmount';

const Main = () => {
  const { res, currentUrl, amount } = useSelector((state) => state);

  useEffect(() => {
    getImages(currentUrl);
  }, [currentUrl]);

  return (
    <div className="main">
      <Sidebar />
      <div className="main-part">
        <div className="grid-container">
          {res.map((el) => {
            return (
              <div className="grid-item">
                <img src={el.url}></img>
              </div>
            );
          })}
        </div>
        <button onClick={(amount) => setAmount}>Show more</button>
      </div>
    </div>
  );
};



export default Main;
