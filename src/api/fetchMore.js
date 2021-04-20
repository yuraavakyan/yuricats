import store from "../redux/store.js";
import * as actions from "../redux/actions.js";

async function fetchMore(url) {
  const response = await fetch(url);
  const images = await response.json();
  store.dispatch(actions.loadMoreImages(images));
}

export default fetchMore;
