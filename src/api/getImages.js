import store from "../redux/store.js";
import * as actions from "../redux/actions.js";
const base = "https://api.thecatapi.com/v1/images/search?";

export async function getImages(count, category_id, animated) {
  const url = !category_id
    ? `${base}limit=${count}&mime_types=${animated ? "gif" : "jpg,png"}`
    : `${base}limit=${count}&category_ids=${category_id}&mime_types=${
        animated ? "gif" : "jpg,png"
      }`;
  const response = await fetch(url);
  const images = await response.json();

  store.dispatch(actions.setImages(images));
}

export async function fetchMore(count, category_id, animated) {
  const url = !category_id
    ? `${base}limit=${count}&mime_types=${animated ? "gif" : "jpg,png"}`
    : `${base}limit=${count}&category_ids=${category_id}&mime_types=${
        animated ? "gif" : "jpg,png"
      }`;
  const response = await fetch(url);
  const images = await response.json();

  store.dispatch(actions.loadMoreImages(images));
}

export function setAnimated(animated) {
  store.dispatch(actions.setAnimated(animated));
} 
