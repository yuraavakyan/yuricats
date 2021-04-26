import store from "../redux/store";
import * as actions from "../redux/actions";

export const setFirstLoad = () => {
  store.dispatch(actions.setFirstLoad());
};
