import { List, fromJS, is } from 'immutable';
import types from 'actions/posts/types';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:
            const newState = fromJS(action.payload);

            // action payload = array будет
            return is(state, newState) ? state : newState;

        default:
            return state;
    }
};