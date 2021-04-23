import store from '../redux/store';
import * as actions from '../redux/actions';

export function setLoading(isLoading){
    store.dispatch(actions.setLoading(isLoading));
}