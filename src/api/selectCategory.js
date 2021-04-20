import store from "../redux/store.js";
import * as actions from "../redux/actions.js";
import { baseImagesSearch } from "../api/apiAddresses";

async function selectCategory(id) {
  const typicalUrl = `${baseImagesSearch}limit=12&category_ids=`;
  store.dispatch(actions.selectCategory(typicalUrl + id, id));
}

export default selectCategory;
