import "./sidebar.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import {
  getCategories,
  resetCategory,
  selectCategory,
} from "../../api/Categories.js";
import AnimatedButton from "../navbar/components/animatedButton/AnimatedButton";
import { setSidebarStatus } from "../../api/setSidebarStatus";
import { setPage } from "../../api/Images";
import SelectAmount from "../settings/components/display/SelectAmount";

const Sidebar = (props) => {
  const { categories, selectedCategory } = useSelector((state) => state);

  useEffect(() => {
    getCategories();
  }, []);

  const handleCategoryClick = (id) => {
    resetCategory();
    selectCategory(id);
    setSidebarStatus(false);
    setPage(1);
  };

  return (
    <aside className={`side ${props.class}`}>
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
        <AnimatedButton class="side-animated" />
        <SelectAmount class="select-side" />
      </div>
    </aside>
  );
};

export default Sidebar;
