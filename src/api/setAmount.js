import store from "../redux/store";
import * as actions from "../redux/actions";

export const setAmount = (amount) => {
  store.dispatch(actions.amountChanged(amount));
};
