import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

async function setAmount(number) {
  store.dispatch(actions.add(number + 10));
}

export default setAmount;
