import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

async function getImages(url) {
  const response = await fetch(url);
  const images = await response.json();

  store.dispatch(actions.setImages(images));
}

export default getImages;
