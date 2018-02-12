import { Map } from 'immutable';

import types from 'actions/users/types';

const initialState = Map({});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_USERS:
            return state.merge(action.payload);

        default:
            return state;
    }
};