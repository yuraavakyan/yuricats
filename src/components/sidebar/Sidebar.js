import "./styles.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getCategories from "../../api/getCategories.js";
import selectCategory from "../../api/selectCategory";
import { baseCategories } from "../../api/apiAddresses";
import AnimatedButton from "../animatedButton/AnimatedButton";
import {setSidebarStatus} from '../../api/setSidebarStatus';

const Sidebar = (props) => {
  const { categories } = useSelector((state) => state);

  useEffect(() => {
    getCategories(baseCategories);
  }, []);

  const handleCategory = (event) => {
    selectCategory(event.target.id);
    const listOfLinks = event.target.parentNode;
    listOfLinks.childNodes.forEach((el) => {
      el.classList.remove("active");
    });
    event.target.classList.add("active");
    setSidebarStatus(false);
  };

  return (
    <sidebar className={`side ${props.class}`}>
      <div className="side-links">
        {categories.map((el) => {

          return (
            <div className="side-link" onClick={handleCategory} id={el.id}>
              {el.name}
            </div>
          );
        })}
      </div>
      <AnimatedButton class="side-animated" />
    </sidebar>
  );
};

export default Sidebar;
