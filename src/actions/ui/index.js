// Core
import types from './types';

export default Object.freeze({
    initialize: () => ({
        type: types.INITIALIZE,
    }),

    // Auth
    startAuthFetching: () => ({
        type: types.START_AUTH_FETCHING,
    }),

    stopAuthFetching: () => ({
        type: types.STOP_AUTH_FETCHING,
    }),

    // Feed
    startFeedFetching: () => ({
        type: types.START_FEED_FETCHING,
    }),

    stopFeedFetching: () => ({
        type: types.STOP_FEED_FETCHING,
    }),
});
