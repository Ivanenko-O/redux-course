import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { replace } from 'react-router-redux';

import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import profileActions from 'actions/profile';
import { api, groupId } from 'instruments/api';

export function* authenticateWorker ({ payload: token }) {

    try {
        // put диспатчит action, сигнал для спинера включиться
        yield put(uiActions.startAuthFetching());

        const response = yield call(fetch, `${api}/user/login`, {
           method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token }),
        });

        const { data: profile, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            // когда token устаревший,
            if(response.status === 401) {
                localStorage.removeItem('token');
            }

            throw new Error(message);
        }

        localStorage.setItem('token', profile.token);

        const { firstName, lastName } = profile;

        yield put(authActions.authenticateSuccess());
        yield put(profileActions.fillProfile(profile));

        yield put(actions.change('forms.user.profile.firstName', firstName));
        yield put(actions.change('forms.user.profile.lastName', lastName));


        yield put(replace('/feed'));
    } catch (error){
        yield put(authActions.authenticateFail(error.message));
    } finally {
        yield put(uiActions.stopAuthFetching());
        yield put(uiActions.initialize());
    }
}