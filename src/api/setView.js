import store from "../redux/store";
import * as actions from "../redux/actions";

export const setView = (view) => {
  store.dispatch(actions.viewChanged(view));
};
