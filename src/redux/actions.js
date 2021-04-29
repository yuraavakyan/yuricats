import * as actionTypes from "./actionTypes.js";

export const selectCategory = (id) => {
  return {
    type: actionTypes.SELECT_CATEGORY,
    payload: {
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
  return {
    type: actionTypes.SET_ANIMATED,
    payload: {
      animated,
    },
  };
};

export const sidebarActivated = (status) => {
  return {
    type: actionTypes.SIDEBAR_ACTIVE,
    payload: {
      status,
    },
  };
};

export const setFirstLoad = () => {
  return {
    type: actionTypes.SET_FIRST_LOAD,
  };
};

export const viewChanged = (gridView) => {
  return {
    type: actionTypes.VIEW_CHANGED,
    payload: {
      gridView,
    },
  }
}

export const amountChanged = (amount)  => {
  return {
    type: actionTypes.AMOUNT_CHANGED,
    payload: {
      amount,
    }
  }
}

export const pageChanged = (page) => {
  return {
    type: actionTypes.PAGE_CHANGED,
    payload: {
      page,
    }
  }
}
