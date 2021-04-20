import * as actionTypes from "./actionTypes.js";

export const selectCategory = (url, id) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: {
      url: url,
      id: id,
    },
  };
};

export const loadMoreImages = (images) => {
  return {
    type: actionTypes.LOAD_MORE_IMAGES,
    payload: {
      images,
    },
  };
};

export const setImages = (images) => {
  return {
    type: actionTypes.SET_IMAGES,
    payload: {
      images,
    },
  };
};

export const setCategories = (categories) => {
  return {
    type: actionTypes.SET_CATEGORIES,
    payload: {
      categories,
    },
  };
};

export const resetCategory = () => {
  return {
    type: actionTypes.RESET_CATEGORY,
  };
};

export const setAnimated = (animated) => {
  return{
    type: actionTypes.SET_ANIMATED,
    payload: {
      animated,
    }
  }
}
