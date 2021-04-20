import store from '../redux/store';
import * as actions from '../redux/actions';

function setAnimated(animated) {
    store.dispatch(actions.setAnimated(animated));
} 

export default setAnimated;