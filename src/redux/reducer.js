import * as actionTypes from "./actionTypes.js";

const initialState = {
  categories: [],
  count: 12,
  images: [],
  animated: false,
  sidebarActive: false,
  selectedCategory: null,
  firstLoad: true,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: {
          id: action.payload.id,
        },
      };

    case actionTypes.LOAD_MORE_IMAGES:
      return {
        ...state,
        images: [...state.images, ...action.payload.images],
      };
    case actionTypes.SET_IMAGES:
      return {
        ...state,
        images: action.payload.images,
      };
    case actionTypes.SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload.categories,
      };

    case actionTypes.RESET_CATEGORY:
      return {
        ...state,
        selectedCategory: null,
      };
    case actionTypes.SET_ANIMATED:
      return {
        ...state,
        animated: action.payload.animated,
      };
    case actionTypes.SIDEBAR_ACTIVE:
      return {
        ...state,
        sidebarActive: action.payload.status,
      };

    case actionTypes.SET_FIRST_LOAD:
      return {
        ...state,
        firstLoad: false,
      };
    default:
      return state;
  }
}

export default reducer;
