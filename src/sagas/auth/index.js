import { takeEvery } from 'redux-saga/effects';

// instruments
import types from 'actions/auth/types';
import { signupWorker } from './workers/signup';
import { authenticateWorker } from './workers/authenticate';
import { loginWorker  } from './workers/login';
import { logoutWorker  } from './workers/logout';

export default {
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    },
    * authenticateWatcher () {
        yield takeEvery(types.AUTHENTICATE, authenticateWorker);
    },
    * loginWatcher () {
        yield takeEvery(types.LOGIN, loginWorker);
    },
    * logoutWatcher () {
        yield takeEvery(types.LOGOUT, logoutWorker);
    }
};