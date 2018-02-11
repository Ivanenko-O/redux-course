import types from './types';

export default Object.freeze({
    fillProfile: (user) => ({
        type: types.FILL_PROFILE,
        payload: user,
    }),
    updateProfile: (user) => ({
        type: types.UPDATE_PROFILE,
        payload: user,
    }),
    clearProfile: () => ({
        type: types.CLEAR_PROFILE,
    }),
    updateProfileSuccess: (user) => ({
        type: types.UPDATE_PROFILE_SUCCESS,
        payload: user,
    }),
    updateProfileFail: (error) => ({
        type: types.UPDATE_PROFILE_FAIL,
        payload: error,
        error: true,
    }),
    updateAvatarSuccess: (url) => ({
        type: types.UPDATE_AVATAR_SUCCESS,
        payload: url,
    }),
    updateAvatar: (avatar) => ({
        type: types.UPDATE_AVATAR,
        payload: avatar,
    }),
    updateAvatarFail: (error) => ({
        type: types.UPDATE_AVATAR_FAIL,
        payload: error,
        error: true,
    }),
});