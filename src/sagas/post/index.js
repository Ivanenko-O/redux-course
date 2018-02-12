import { takeEvery } from 'redux-saga/effects';

// instruments
import types from 'actions/post/types';


export default {
    * signupWatcher () {
        yield takeEvery(types.SIGNUP, signupWorker);
    },
};