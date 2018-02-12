import { List, fromJS, is } from 'immutable';
import types from 'actions/posts/types';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:

            console.time('posts reducer: result')
            const newState = fromJS(action.payload.result);
            const result = is(state, newState) ? state : newState;
            console.timeEnd('end');

            return result;

        case types.CLEAR_POSTS:
            return initialState;

        default:
            return state;
    }
};