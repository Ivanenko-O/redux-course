
import types from './types';

export default Object.freeze({
   initialize: () => ({
       type: types.INITIALIZE,
   }),
    startAuthFetching: () => ({
        type: types.START_AUTH_FETCHING,
    }),
    stopAuthFetching: () => ({
        type: types.STOP_AUTH_FETCHING,
    }),
});