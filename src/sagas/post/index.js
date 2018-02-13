// Core
import { takeEvery } from 'redux-saga/effects';

// Instruments
import types from 'actions/posts/types';
import { createWorker } from './workers/create';
import { deleteWorker } from './workers/delete';

export default {
    * createWatcher () {
        yield takeEvery(types.CREATE_POST, createWorker);
    },
    * deleteWatcher () {
        yield takeEvery(types.DELETE_POST, deleteWorker);
    },
};
