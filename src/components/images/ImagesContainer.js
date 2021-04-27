import React, { useEffect } from "react";
import "./images.scss";
import { useSelector } from "react-redux";
import { getImages, fetchMore } from "../../api/getImages";

const Images = () => {
  const { images, count, selectedCategory, animated } = useSelector(
    (state) => state
  );

  useEffect(() => {
    getImages(count, selectedCategory?.id, animated);
  }, [selectedCategory, animated]);

  const handleShowMore = () => {
    fetchMore(count, selectedCategory?.id, animated);
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
