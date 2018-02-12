import { call, put, select } from 'redux-saga/effects';
import { replace } from 'react-router-redux';

import pages from 'routes/pages';
import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import profileActions from 'actions/profile';
import postsActions from 'actions/posts';
import { api } from 'instruments/api';

export function* logoutWorker () {
    try {
        yield put(uiActions.startAuthFetching());

       const token = yield select((state) => state.profile.token)

        const response = yield call(fetch, `${api}/user/logout`, {
           method: 'GET',
            headers: {
               Authorization: token
            },
        });

        if (response.status !== 204) {
            const { message } = yield call([response, response.json]);

            throw new Error(message);
        }

        yield put(authActions.logoutSuccess());
    } catch (error){
        yield put(authActions.logoutFail(error.message));
    } finally {
        localStorage.removeItem('token');
        yield put(postsActions.clearPosts());
        yield put(profileActions.clearProfile());
        yield put(uiActions.stopAuthFetching());
        yield put(replace(pages.login));
    }
}