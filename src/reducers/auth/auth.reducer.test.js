import { Map } from 'immutable';
import reducer from './';

const initialState = Map({
    authenticated: false,
});

const updatedState = Map({
   authenticated: true,
});

const loginSuccessAction = {
    type: 'LOGIN_SUCCESS',
};
const signupAction = {
    type: 'SIGNUP_SUCCESS',
};
const logout = {
    type: 'LOGOUT_SUCCESS',
};

describe('Auth reducer test:', () => {
    test('Should handle \'LOGIN_SUCCESS\' action correctly', () => {
        // const result = reducer(initialState, { type: 'LOGIN_SUCCESS' });
        const result = reducer(initialState, loginSuccessAction);
        console.log(`result --> ${result}`);
        expect(result).toEqual(updatedState);
    });

    test('Should handle \'SIGNUP\' action correctly', () => {

        const result = reducer(initialState, signupAction);
        // console.log(`result --> ${result}`);
        expect(result).toEqual(updatedState);
    });

    test('Should handle \'LOGOUT\' action correctly', () => {

        const result = reducer(initialState, logout);
        // console.log(`result --> ${result}`);
        expect(result).toEqual(initialState);
    });
});