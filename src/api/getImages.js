import store from "../redux/store.js";
import * as actions from "../redux/actions.js";
import { setLoading } from "./setLoading";

async function getImages(url) {
  const response = await fetch(url);
  const images = await response.json();
  setLoading(false);

  store.dispatch(actions.setImages(images));
}

export default getImages;
