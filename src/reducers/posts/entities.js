// Core
import { Map, fromJS, is } from 'immutable';

// Instruments
import types from 'actions/posts/types';

const initialState = Map({});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FETCH_POSTS_SUCCESS: {
            const newState = fromJS(action.payload.entities.posts);

            return is(state, newState) ? state : newState;
        }

        case types.CREATE_POST_SUCCESS: {
            const result = state.merge(fromJS(action.payload.entities.posts));

            return result;
        }

        case types.DELETE_POST_SUCCESS: {
            const result = state.delete(action.payload);

            return result;
        }

        case types.CLEAR_POSTS:
            return initialState;

        default:
            return state;
    }
};
