import { takeEvery } from 'redux-saga/effects';

// instruments
import types from 'actions/auth/types';
import { signupWorker } from './workers/signup';
import { authenticateWorker } from './workers/authenticate';

export default {
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    },
    * authenticateWatcher () {
        yield takeEvery(types.AUTHENTICATE, authenticateWorker);
    }
};