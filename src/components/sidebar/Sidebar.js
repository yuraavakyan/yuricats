import "./sidebar.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { getCategories, selectCategory } from "../../api/getCategories.js";
import AnimatedButton from "../animatedButton/AnimatedButton";
import { setSidebarStatus } from "../../api/setSidebarStatus";

const Sidebar = (props) => {
  const { categories, selectedCategory } = useSelector((state) => state);

  useEffect(() => {
    getCategories();
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
              selectedCategory?.id === el.id ? "active" : ""
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
