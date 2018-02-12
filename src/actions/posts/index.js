import types from './types';

import { api, groupId } from '../../instruments/api';
import { normalize } from 'normalizr';
import { post } from 'schemas';
import usersActions from 'actions/users';

export default Object.freeze({
    // когда используем thunk, есть доступ к dispatch
    fetchPosts: () => async (dispatch) => {
        try {
            const response = await fetch(`${api}/feed`, {
                method: 'GET',
                headers: {
                    'x-no-auth': groupId
                },
            });

            const {data, message} = await response.json();

            if (response.status !== 200) {
                throw new Error(message);
            }

            const mormalizedPosts = normalize(data, [post]);

            console.log(mormalizedPosts);

            //отправляем массив с данными в редакс
            dispatch({
                type: types.FETCH_POSTS_SUCCESS,
                payload: mormalizedPosts,

            });

        } catch (error) {
            dispatch({
                type: types.FETCH_POSTS_FAIL,
                payload: error.message,
                error: true,
            });
            dispatch(usersActions(normalizedPosts.entities.users));
        } finally {
            console.log('finally');
        }
    },
    clearPosts: () => ({
        type: types.CLEAR_POSTS,
    }),
    // createPost: () =>
});