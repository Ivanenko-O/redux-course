// Core
import { Record } from 'immutable';

// Types
import types from 'actions/ui/types';

const initialState = new Record({
    initialized:  false,
    authFetching: false,
    feedFetching: false,
})();

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE:
            return state.set('initialized', true);

        case types.START_AUTH_FETCHING:
            return state.set('authFetching', true);

        case types.STOP_AUTH_FETCHING:
            return state.set('authFetching', false);

        case types.START_FEED_FETCHING:
            return state.set('feedFetching', true);

        case types.STOP_FEED_FETCHING:
            return state.set('feedFetching', false);

        default:
            return state;
    }
};
