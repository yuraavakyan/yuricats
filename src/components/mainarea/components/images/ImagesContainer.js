import React, { useEffect } from "react";
import "./images.scss";
import { useSelector } from "react-redux";
import { getImages, fetchMore } from "../../../../api/Images";

const Images = () => {
  const {
    images,
    count,
    selectedCategory,
    animated,
    gridView,
    page,
    sidebarActive,
  } = useSelector((state) => state);

  useEffect(() => {
    getImages(count, selectedCategory?.id, animated);
  }, [selectedCategory, animated, count, gridView]);

  const handleShowMore = () => {
    fetchMore(count, selectedCategory?.id, animated, page);
  };

  return (
    <div className={`images-container ${sidebarActive ? "noscroll" : ""}`}>
      <div className={`grid-container ${gridView ? "" : "single"}`}>
        {images.length === 0 ? (
          <div>
            Sorry guys...There are no images, that match selected criteria :(
          </div>
        ) : (
          images.map((el) => {
            return (
              <div
                className="grid-item"
                id={el.id}
                key={el.id + selectedCategory?.id}
              >
                <img src={el.url} alt={el.id}></img>
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
