import store from "../redux/store";
import * as actions from "../redux/actions";

function switchScreen(mobile) {
  store.dispatch(actions.switchScreen(mobile));
}

export default switchScreen;
