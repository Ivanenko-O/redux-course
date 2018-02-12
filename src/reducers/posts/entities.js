import { Map, fromJS, is } from 'immutable';
import types from 'actions/posts/types';

const initialState = Map({});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS:

            cconsole.time('posts reducer entities: result');
            const newState = fromJS(action.payload.entities.posts);
            const result = is(state, newState) ? state : newState;
            console.timeEnd('end entities');

            return result;

        case types.CLEAR_POSTS:
            return initialState;

        default:
            return state;
    }
};