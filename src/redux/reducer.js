import * as actionTypes from "./actionTypes.js";

const initialState = {
  categories: [],
  count: 9,
  res: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return {
        ...state,
        url: action.payload.url,
      };

    case actionTypes.ADD_PICS:
      return {
        ...state,
        amount: action.payload.amount,
      };
    case actionTypes.NEW_DATA:
      return {
        ...state,
        res: action.payload.res,
      };
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };
    case actionTypes.SET_CURRENT_URL:
      return {
        ...state,
        currentUrl: action.payload.currentUrl,
      };

    default:
      return state;
  }
}

export default reducer;
