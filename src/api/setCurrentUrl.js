import fetch from "node-fetch";
import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

async function setCurrentUrl(url, id) {
  store.dispatch(actions.setCurrentUrl(`${url}${id}`));
}

export default setCurrentUrl;
