import React, { useEffect } from "react";
import "./images.scss";
import { useSelector } from "react-redux";
import getImages from "../../api/getImages";
import fetchMore from "../../api/fetchMore";
import { addressMaker, baseImagesSearch } from "../../api/apiAddresses";

const Images = () => {
  const { images, selectedCategory, animated } = useSelector((state) => state);
  console.log(selectedCategory);

  useEffect(() => {
    if (animated) {
      getImages(
        selectedCategory
          ? `${selectedCategory?.url}&mime_types=gif`
          : `${baseImagesSearch}limit=12&mime_types=gif`
      );
    } else
      getImages(
        selectedCategory
          ? `${selectedCategory?.url}`
          : `${baseImagesSearch}limit=12`
      );
  }, [selectedCategory, animated]);

  const handleShowMore = () => {
    let moreUrl = "";
    if (animated) {
      if (!selectedCategory) {
        moreUrl = `${baseImagesSearch}limit=10&mime_types=gif`;
      } else moreUrl = addressMaker(10, selectedCategory?.id, animated);
      console.log(moreUrl);
      fetchMore(moreUrl);
    } else {
      if (!selectedCategory) {
        moreUrl = `${baseImagesSearch}limit=10&mime_types=jpg,png`;
      } else moreUrl = addressMaker(10, selectedCategory?.id, animated);
      fetchMore(moreUrl);
    }
  };

  const handleClickImage = (event) => {
    const imagesContainer = event.target.parentNode.parentNode;
    const imageContainer = event.target.parentNode;

    for (let el of imagesContainer.childNodes) {
      el.classList.remove("clicked");
    }
    imageContainer.classList.add("clicked");
  };

  return (
    <div className="images-container">
      <div className="grid-container">
        {images.map((el) => {
          return (
            <div className="grid-item" onClick={handleClickImage}>
              <img src={el.url} alt=""></img>
            </div>
          );
        })}
      </div>
      <button onClick={handleShowMore} className="show-more">
        Show more
      </button>
    </div>
  );
};

export default Images;
