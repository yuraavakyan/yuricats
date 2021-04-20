import fetch from "node-fetch";
import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

async function getCategories(url) {
  const response = await fetch(url);
  const data = await response.json();

  const capitalized = data.map((el) => {
    return {
      name: el.name[0].toUpperCase() + el.name.slice(1),
      id: el.id,
    };
  });

  store.dispatch(actions.setCategories(capitalized));
}

export default getCategories;
