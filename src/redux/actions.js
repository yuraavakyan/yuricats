import * as actionTypes from "./actionTypes.js";

export const changed = (newUrl) => {
  return {
    type: actionTypes.CHANGE_CATEGORY,
    payload: {
      url: newUrl,
    },
  };
};

export const add = (count) => {
  return {
    type: actionTypes.ADD_PICS,
    payload: {
      count,
    },
  };
};

export const newData = (res) => {
  return {
    type: actionTypes.NEW_DATA,
    payload: {
      res,
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

export const setCurrentUrl = (url) => {
  return {
    type: actionTypes.SET_CURRENT_URL,
    payload: {
      currentUrl: url,
    },
  };
};


