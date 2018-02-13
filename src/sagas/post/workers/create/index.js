// Core
import { call, put, select } from 'redux-saga/effects';
import { normalize } from 'normalizr';

// Instruments
import postsActions from 'actions/posts';
import uiActions from 'actions/ui';
import { api } from 'instruments/api';
import { postSchema } from 'schemas';

export function* createWorker ({ payload: comment }) {
    yield put(uiActions.startFeedFetching());

    const token = yield select((state) => state.profile.token);

    try {
        const response = yield call(fetch, `${api}/feed`, {
            method:  'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization:  token,
            },
            body: JSON.stringify({ comment }),
        });

        const { data: denormalizedPost, message } = yield call([
            response,
            response.json
        ]);

        console.log('Denorm', denormalizedPost);

        if (response.status !== 200) {
            if (response.status === 401) {
                localStorage.removeItem('token');
            }

            throw new Error(message);
        }

        const normalizedPost = normalize(denormalizedPost, postSchema);

        console.log('Norm', normalizedPost);

        yield put(postsActions.createPostSuccess(normalizedPost));
    } catch (e) {
        yield put(postsActions.createPostFail(e.message));
    } finally {
        yield put(uiActions.stopFeedFetching());
    }
}
