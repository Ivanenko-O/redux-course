import types from './types';

export default Object.freeze({
    login: (user) => ({
        type: types.LOGIN,
        payload: user,
    }),
    loginSuccess: () => ({
        type: types.LOGIN_SUCCESS,
    }),
    loginFail: (error) => ({
        type: types.LOGIN_FAIL,
        payload: error,
        error: true,
    }),

    authenticate: (token) => ({
        type: types.AUTHENTICATE,
        payload: token,
    }),
    authenticateSuccess: () => ({
        type: types.AUTHENTICATE_SUCCESS,
    }),
    authenticateFail: (error) => ({
        type: types.AUTHENTICATE_FAIL,
        payload: error,
        error: true,
    }),

    signup: (user) => ({
        type: types.SIGNUP,
        payload: user,
    }),
    signupSuccess: () => ({
        type: types.SIGNUP_SUCCESS,
    }),
    signupFail: (error) => ({
        type: types.SIGNUP_FAIL,
        payload: error,
        error: true,
    }),


    logout: () => ({
        type: types.LOGOUT,
    }),
    logoutSuccess: () => ({
        type: types.LOGOUT_SUCCESS,
    }),
    logoutFail: (error) => ({
        type: types.LOGOUT_FAIL,
        payload: error,
        error: true,
    }),

})