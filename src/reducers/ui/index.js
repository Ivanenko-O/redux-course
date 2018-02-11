import { Record } from 'immutable';
// record - не нужно писать .get , можем обращаться как к обычному js объекту


import types from 'actions/ui/types';

const initialState = new Record({
    initialized: false,
})();

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INITIALIZE:
            return state.set('initialized', true);

        default:
            return state;
    }
};