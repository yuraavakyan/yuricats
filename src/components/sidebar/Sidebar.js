import "./styles.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getCategories from "../../api/getCategories.js";
import selectCategory from "../../api/selectCategory";
import { baseCategories } from "../../api/apiAddresses";

const Sidebar = (props) => {
  useEffect(() => {
    getCategories(baseCategories);
  }, []);

  const categories = useSelector((state) => state.categories);
  return (
    <sidebar className="side">
      <div className="side-links">
        {categories.map((el) => {
          return (
            <div className="side-link" onClick={handleCategory} id={el.id}>
              {el.name}
            </div>
          );
        })}
      </div>
    </sidebar>
  );
};

const handleCategory = (event) => {
  selectCategory(event.target.id);
  const listOfLinks = event.target.parentNode;
  listOfLinks.childNodes.forEach((el) => {
    el.classList.remove("active");
  });
  event.target.classList.add("active");
};

export default Sidebar;
