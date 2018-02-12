import { call, put } from 'redux-saga/effects';
import { actions } from 'react-redux-form';

import { replace } from 'react-router-redux';

import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import profileActions from 'actions/profile';
import { api, groupId } from 'instruments/api';

export function* signupWorker ({ payload: user }) {
    try {
        // put диспатчит action, сигнал для спинера включиться
        yield put(uiActions.startAuthFetching());

        // в call ссылку на функцию запускаемую (сылка), а дальше аргуметы
        const response = yield call(fetch, `${api}/user/${groupId}`, {
           method: 'POST',
            headers: {
               'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        });

        // response - context, response.json - method  кот. нужно вызвать
        const { data: profile, message } = yield call([response, response.json]);

        if (response.status !== 200) {
            throw new Error(message);
        }

        localStorage.setItem('token', profile.token);

        const { firstName, lastName } = profile;

        // auth становится true если азпускается этот экшен
        yield put(authActions.signupSuccess());
        // наполняем данными профиль
        yield put(profileActions.fillProfile(profile));

        yield put(actions.change('forms.user.profile.firstName', firstName));
        yield put(actions.change('forms.user.profile.lastName', lastName));
        yield put(actions.reset('forms.signup'));

        yield put(replace('/feed'));
    } catch (error){
        yield put(authActions.signupFail(error.message));
    } finally {
        yield put(uiActions.stopAuthFetching());
    }
}