import fetch from "node-fetch";
import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

export async function getCategories() {
  const url = "https://api.thecatapi.com/v1/categories";
  const response = await fetch(url);
  const data = await response.json();
  store.dispatch(actions.setCategories(data));
}

export function resetCategory() {
  store.dispatch(actions.resetCategory());
}

export function selectCategory(id) {
  store.dispatch(actions.selectCategory(id));
}
