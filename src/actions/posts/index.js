// Instruments
import types from './types';
import usersActions from 'actions/users';
import { api, groupId } from 'instruments/api';
import { normalize } from 'normalizr';
import { postSchema } from 'schemas';

export default Object.freeze({
    fetchPosts: () => async (dispatch) => {
        try {
            const response = await fetch(`${api}/feed`, {
                method:  'GET',
                headers: {
                    'x-no-auth': groupId,
                },
            });

            const { data, message } = await response.json();

            if (response.status !== 200) {
                throw new Error(message);
            }

            const normalizedPosts = normalize(data, [postSchema]);

            // was fixed - dispatch(usersActions) -- from bottom to top
            dispatch(usersActions.fillUsers(normalizedPosts.entities.users));

            dispatch({
                type:    types.FETCH_POSTS_SUCCESS,
                payload: normalizedPosts,
            });
        } catch (e) {
            dispatch({
                type:    types.FETCH_POSTS_FAIL,
                payload: e.message,
                error:   true,
                meta:    'Additional meta',
            });
        } finally {
            //
        }
    },

    clearPosts: () => ({
        type: types.CLEAR_POSTS,
    }),

    // Create Post
    createPost: (comment) => ({
        type:    types.CREATE_POST,
        payload: comment,
    }),

    createPostSuccess: (post) => ({
        type:    types.CREATE_POST_SUCCESS,
        payload: post,
    }),

    createPostFail: (error) => ({
        type:    types.CREATE_POST_FAIL,
        payload: error,
        error:   true,
    }),

    // Like Post
    likePost: (id) => ({
        type:    types.LIKE_POST,
        payload: id,
    }),

    likePostSuccess: () => ({
        type: types.LIKE_POST_SUCCESS,
    }),

    likePostFail: (error) => ({
        type:    types.LIKE_POST_FAIL,
        payload: error,
        error:   true,
    }),

    // Dislike Post
    dislikePost: (id) => ({
        type:    types.DISLIKE_POST,
        payload: id,
    }),

    dislikePostSuccess: () => ({
        type: types.DISLIKE_POST_SUCCESS,
    }),

    dislikePostFail: (error) => ({
        type:    types.DISLIKE_POST_FAIL,
        payload: error,
        error:   true,
    }),

    // Edit Post
    editPost: (post) => ({
        type:    types.EDIT_POST,
        payload: post,
    }),

    editPostSuccess: (post) => ({
        type:    types.EDIT_POST_SUCCESS,
        payload: post,
    }),

    editPostFail: (error) => ({
        type:    types.EDIT_POST_FAIL,
        payload: error,
        error:   true,
    }),

    // Delete Post
    deletePost: (id) => ({
        type:    types.DELETE_POST,
        payload: id,
    }),

    deletePostSuccess: (id) => ({
        type:    types.DELETE_POST_SUCCESS,
        payload: id,
    }),

    deletePostFail: (error) => ({
        type:    types.DELETE_POST_FAIL,
        payload: error,
        error:   true,
    }),
});
