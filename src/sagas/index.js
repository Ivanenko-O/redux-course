import { all } from 'redux-saga/effects';

import auth from './auth';

export function* saga () {
    yield all([
        auth.signupWatcher(),
        auth.authenticateWatcher(),
        auth.loginWatcher(),
        auth.logoutWatcher(),
    ]);
}