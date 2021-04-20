import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

function resetCategory() {
  store.dispatch(actions.resetCategory());
}

export default resetCategory;
