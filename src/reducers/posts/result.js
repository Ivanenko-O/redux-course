// Core
import { List, fromJS, is } from 'immutable';

// Instruments
import types from 'actions/posts/types';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS: {
            const newState = fromJS(action.payload.result);

            console.log(newState);
            const result = is(state, newState) ? state : newState;

            return result;
        }

        case types.CREATE_POST_SUCCESS: {
            return state.unshift(action.payload.result);
        }

        case types.DELETE_POST_SUCCESS: {
            return state.filter((id) => id !== action.payload);
        }

        case types.CLEAR_POSTS:
            return initialState;

        default:
            return state;
    }
};
