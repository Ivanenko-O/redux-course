// Core
import { all } from 'redux-saga/effects';

// Instruments
import auth from './auth';
import posts from './post';

export function* saga () {
    yield all([
        // Auth
        auth.signupWatcher(),
        auth.authenticateWatcher(),
        auth.loginWatcher(),
        auth.logoutWatcher(),

        // Posts
        posts.createWatcher(),
        posts.deleteWatcher()
    ]);
}
