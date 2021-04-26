import React, { useEffect } from "react";
import "./images.scss";
import { useSelector } from "react-redux";
import getImages from "../../api/getImages";
import fetchMore from "../../api/fetchMore";
import { addressMaker, baseImagesSearch } from "../../api/apiAddresses";

const Images = () => {
  const { images, selectedCategory, animated } = useSelector((state) => state);

  useEffect(() => {
    if (animated) {
      getImages(
        selectedCategory?.id !== 0
          ? `${selectedCategory.url}&mime_types=gif`
          : `${baseImagesSearch}limit=12&mime_types=gif`
      );
    } else
      getImages(
        selectedCategory?.id !== 0
          ? `${selectedCategory?.url}`
          : `${baseImagesSearch}limit=12`
      );
  }, [selectedCategory, animated]);

  const handleShowMore = () => {
    let moreUrl = "";
    if (animated) {
      if (selectedCategory.id === 0) {
        moreUrl = `${baseImagesSearch}limit=10&mime_types=gif`;
      } else moreUrl = addressMaker(10, selectedCategory?.id, animated);
      console.log(moreUrl);
      fetchMore(moreUrl);
    } else {
      if (selectedCategory.id === 0) {
        moreUrl = `${baseImagesSearch}limit=10&mime_types=jpg,png`;
      } else moreUrl = addressMaker(10, selectedCategory?.id, animated);
      fetchMore(moreUrl);
    }
  };

  return (
    <div className="images-container">
      <div className="grid-container">
        {images.length === 0 ? (
          <div>
            Sorry guys...There are no images, that match selected criteria :(
          </div>
        ) : (
          images.map((el) => {
            return (
              <div className="grid-item">
                <img src={el.url} alt=""></img>
              </div>
            );
          })
        )}
      </div>
      <button onClick={handleShowMore} className="show-more">
        Show more
      </button>
    </div>
  );
};

export default Images;
