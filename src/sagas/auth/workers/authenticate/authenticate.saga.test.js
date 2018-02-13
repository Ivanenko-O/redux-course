import { put, call } from 'redux-saga/effects';
import { actions } from 'react-redux-form';
import { replace } from 'react-router-redux';

import { authenticateWorker } from './';

import uiActions from 'actions/ui';
import authActions from 'actions/auth';
import profileActions from 'actions/profile';
import { api } from 'instruments/api';
import pages from 'routes/pages';
import { token, setup, response, responseData, responseDataFail, responseFail, error, profile } from 'mocks';

// authenticateAction - return {} from action
const authenticateAction = authActions.authenticate(token);
const url = `${api}/user/login`;
const saga = authenticateWorker(authenticateAction);

setup();

describe('authenticate saga:', () => {
    test('should dispatch START_AUTH_FETCHING', () => {

        console.log(put(uiActions.startAuthFetching()));
        expect(saga.next().value).toEqual(put(uiActions.startAuthFetching()));
    });

    test('should dispatch START_AUTH_FETCHING', () => {
        expect(saga.next().value).toEqual(call(fetch, url, {method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ token }),
            }),
        );
    });
});
