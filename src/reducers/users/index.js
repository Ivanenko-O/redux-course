// Core
import { Map, fromJS } from 'immutable';

// Instruments
import types from 'actions/users/types';
import profileTypes from 'actions/profile/types';

// was fixed - Map([]) -> Map({})
const initialState = Map({});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_USERS:
            // was fixed - state.merge -> fromJS
            return state.merge(action.payload);

        case profileTypes.FILL_PROFILE:
            console.log(action);
            return state.set(action.payload.id, fromJS(action.payload));

        default:
            return state;
    }
};
