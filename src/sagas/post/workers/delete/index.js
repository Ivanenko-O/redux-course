// Core
import { call, put, select } from 'redux-saga/effects';

// Instruments
import postsActions from 'actions/posts';
import uiActions from 'actions/ui';
import { api } from 'instruments/api';

export function* deleteWorker ({ payload: postId }) {
    yield put(uiActions.startFeedFetching());

    const token = yield select((state) => state.profile.token);

    try {
        const response = yield call(fetch, `${api}/feed/${postId}`, {
            method:  'DELETE',
            headers: {
                Authorization: token,
            },
        });

        if (response.status !== 204) {
            throw new Error('Whoops: Post wasn\'t deleted!');
        }

        yield put(postsActions.deletePostSuccess(postId));
    } catch (e) {
        yield put(postsActions.deletePostFail(e.message));
    } finally {
        yield put(uiActions.stopFeedFetching());
    }
}
