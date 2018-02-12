import { Record } from 'immutable';
// record - не нужно писать .get , можем обращаться как к обычному js объекту


import types from 'actions/profile/types';

const initialState = new Record({
    id: '',
    token: '',
    created: 0,
    avatar: '',
    firstName: '',
    lastName: '',
    email: '',
    groupId: '',
})();

export default (state = initialState, action) => {
    switch (action.type) {
        case types.FILL_PROFILE:
        case types.UPDATE_PROFILE_SUCCESS:
            return state.merge(action.payload);

        case types.CLEAR_PROFILE:
            return initialState;

        case types.UPDATE_AVATAR_SUCCESS:
            return state.set('avatar', action.payload);

        default:
            return state;
    }
};