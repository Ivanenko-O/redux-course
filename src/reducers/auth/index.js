import { Map } from 'immutable';

import types from 'actions/auth/types';

const initialState = Map({
    authenticated: false
});

export default (state = initialState, action) => {
    switch (action.type) {
        case types.LOGIN_SUCCESS:
        case types.SIGNUP_SUCCESS:
        case types.AUTHENTICATE_SUCCESS:
            return state.set('authenticated', true);

        case types.LOGOUT_SUCCESS:
            return state.set('' +
                'authenticated', false);

        // case types.LOGIN_SUCCESS:

        default:
            return state;

    }
}