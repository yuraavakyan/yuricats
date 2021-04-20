import "./styles.scss";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import Sidebar from "../sidebar/Sidebar.js";
import getImages from "../../api/getImages";
import fetchMore from "../../api/fetchMore";
import { addressMaker, baseImagesSearch } from "../../api/apiAddresses";

const Main = () => {
  const { images, selectedCategory, animated } = useSelector((state) => state);

  useEffect(() => {
    if (animated) {
      getImages(
        selectedCategory
          ? `${selectedCategory.url}&mime_type=gif`
          : `${baseImagesSearch}limit=12&mime_type=gif`
      );
    } else
      getImages(
        selectedCategory
          ? `${selectedCategory.url}`
          : `${baseImagesSearch}limit=12`
      );
  }, [selectedCategory, animated]);

  const handleShowMore = () => {
    let moreUrl = "";
    if (!selectedCategory) {
      moreUrl = `${baseImagesSearch}limit=10`;
    } else moreUrl = addressMaker(10, selectedCategory?.id);
    console.log(moreUrl);
    fetchMore(moreUrl);
  };

  return (
    <div className="main">
      <Sidebar />
      <div className="main-part">
        <div className="grid-container">
          {images.map((el) => {
            return (
              <div className="grid-item">
                <img src={el.url}></img>
              </div>
            );
          })}
        </div>
        <button onClick={handleShowMore} className="show-more">
          Show more
        </button>
      </div>
    </div>
  );
};

export default Main;
