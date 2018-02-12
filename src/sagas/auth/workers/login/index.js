import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { replace } from 'react-router-redux';

import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import profileActions from 'actions/profile';
import { api } from 'instruments/api';

export function* loginWorker ({ payload: { email, password, remember } }) {
    try {
        yield put(uiActions.startAuthFetching());

        const response = yield call(fetch, `${api}/user/login`, {
           method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password }),
        });

        const { data: profile, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        if(remember) {
            localStorage.setItem('token', profile.token);
        }

        const { firstName, lastName } = profile;

        yield put(authActions.loginSuccess());
        yield put(profileActions.fillProfile(profile));

        yield put(actions.change('forms.user.profile.firstName', firstName));
        yield put(actions.change('forms.user.profile.lastName', lastName));
        yield put(actions.reset('forms.login'));

        yield put(replace('/feed'));
    } catch (error){
        yield put(authActions.loginFail(error.message));
    } finally {
        yield put(uiActions.stopAuthFetching());
    }
}