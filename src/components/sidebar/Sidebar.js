import "./styles.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import getCategories from "../../api/getCategories.js";
import selectCategory from "../../api/selectCategory";
import { baseCategories } from "../../api/apiAddresses";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { setSidebarStatus } from "../../api/setSidebarStatus";

const Sidebar = (props) => {
  const { categories, selectedCategory } = useSelector((state) => state);

  useEffect(() => {
    getCategories(baseCategories);
    selectCategory(0);
  }, []);

  const handleCategoryClick = (id) => {
    selectCategory(id);
    setSidebarStatus(false);
  };

  return (
    <sidebar className={`side ${props.class}`}>
      <div className="side-links">
        {categories.map((el) => (
          <div
            className={`side-link ${
              selectedCategory.id === el.id ? "active" : ""
            }`}
            onClick={() => handleCategoryClick(el.id)}
            key={el.id}
          >
            {el.name}
          </div>
        ))}
      </div>
      <AnimatedButton class="side-animated" />
    </sidebar>
  );
};

export default Sidebar;
