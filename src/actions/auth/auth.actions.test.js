import actions from './';

const user = {
    firstName: '',
    lastName: '',
};

const error = {
    message: 'An error ocurred',
};

const token = 'token';

describe('Auth actions', () => {
    test('Login action', () => {
        expect(actions.login(user)).toEqual({
            type: 'LOGIN',
            payload: user,
        });
    });
    test('Login success action', () => {
        expect(actions.loginSuccess(user)).toEqual({
            type: 'LOGIN_SUCCESS',
        });
    });
    test('Login fail action', () => {
        expect(actions.loginFail(error)).toEqual({
            type: 'LOGIN_FAIL',
            payload: error,
            error: true,
        });
    });
    test('authenticate fail action', () => {
        expect(actions.authenticateFail(error)).toEqual({
            type: 'AUTHENTICATE_FAIL',
            payload: error,
            error: true,
        });
    });
    test('authenticate  action', () => {
        expect(actions.authenticate(token)).toEqual({
            type: 'AUTHENTICATE',
            payload: token,
        });
    });
    test('authenticate success action', () => {
        expect(actions.authenticateSuccess()).toEqual({
            type: 'AUTHENTICATE_SUCCESS',
        });
    });

});