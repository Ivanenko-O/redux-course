import { List } from 'immutable';
import types from 'actions/notifications/types';
// всегда новый массив
const initialState = List([]);

export default (state = initialState, action) => {
    switch (action.type) {
        case types.INVOKE:
            // ...state распылим state
            return state.size < 3 ? state.push(action.payload) : state;

        case types.DISSOLVE:
            return state.filter(({ id }) => id !== action.payload);

        default:
            return state;
    }
};