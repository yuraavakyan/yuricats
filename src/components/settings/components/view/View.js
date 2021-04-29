import React, { useEffect } from "react";
import grid from "../../../../img/icons/grid-view.png";
import single from "../../../../img/icons/single-view.png";
import { setView } from "../../../../api/setView";
import "./view.scss";
import { useSelector } from "react-redux";

const View = () => {
  useEffect(() => {}, []);

  const { gridView } = useSelector((state) => state);
  const changeView = () => {
    if (gridView) {
      setView(false);
    } else setView(true);
  };

  return (
    <div className="select-view">
      <div>View: </div>
      {gridView ? (
        <div className="grid-view" onClick={changeView}>
          <div className="grid-icon">
            <img src={grid}></img>
          </div>
          Grid view
        </div>
      ) : (
        <div className="single-view" onClick={changeView}>
          <div className="single-icon">
            <img src={single}></img>
          </div>
          Single view
        </div>
      )}
    </div>
  );
};

export default View;
