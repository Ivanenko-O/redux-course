// Core
import { List, fromJS, is } from 'immutable';

// Instruments
import types from 'actions/post/types';

const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.CREATE_POST_SUCCESS:
            return state;

        default:
            return state;
    }
};
