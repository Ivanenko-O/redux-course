import types from './types';

import { api, groupId } from '../../instruments/api';

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

            dispatch({
                type: types.FETCH_POSTS_SUCCESS,
                payload: data,

            });

        } catch (error) {
            dispatch({
                type: types.FETCH_POSTS_FAIL,
                payload: error.message,
                error: true,
                meta: 'Additional info'
            });
            console.log(error);
        } finally {
            console.log('finally');
        }
    },
});