import "./styles.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../redux/store";
import * as actions from "../../redux/actions.js";
import getCategories from "../../api/getCategories.js";
import setCurrentUrl from "../../api/setCurrentUrl";

const Sidebar = (props) => {
  const categories = useSelector((state) => state.categories);

  useEffect(() => {
    getCategories("https://api.thecatapi.com/v1/categories");
  }, []);
  return (
    <sidebar className="side">
      <div className="side-links">
        {categories.map((el) => {
          return (
            <div className="side-link" onClick={changeUrl} id={el.id}>
              {el.name}
            </div>
          );
        })}
      </div>
    </sidebar>
  );
};

const changeUrl = (event) => {
  const typicalUrl =
    "https://api.thecatapi.com/v1/images/search?limit=9&category_ids=";
  setCurrentUrl(typicalUrl, event.target.id);
};

export default Sidebar;
