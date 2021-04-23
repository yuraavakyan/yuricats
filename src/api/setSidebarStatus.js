import store from '../redux/store';
import * as actions from '../redux/actions';

export const setSidebarStatus = (status) => {
    store.dispatch(actions.sidebarActivated(status));
}