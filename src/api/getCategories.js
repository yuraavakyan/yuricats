import fetch from "node-fetch";
import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

async function getCategories(url) {
  const response = await fetch(url);
  const data = await response.json();
  store.dispatch(actions.setCategories(data));
}

console.log(store.getState());

export default getCategories;
