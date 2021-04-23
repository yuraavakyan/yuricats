import * as actionTypes from "./actionTypes.js";

const initialState = {
  categories: [],
  count: 12,
  images: [],
  isLoading: true,
  mobile: null,
  animated: false,
  sidebarActive: false,

};

function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.SELECT_CATEGORY:
      return {
        ...state,
        selectedCategory: {
          url: action.payload.url,
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
        selectedCategory: undefined,
      };
    case actionTypes.SET_ANIMATED:
      return {
        ...state,
        animated: action.payload.animated,
      };

    case actionTypes.SET_LOADING:
      return {
        ...state,
        isLoading: action.payload.isLoading,
      }

    case actionTypes.SIDEBAR_ACTIVE:
      return {
        ...state,
        sidebarActive: action.payload.status,
      }
    default:
      return state;
  }
}

export default reducer;
