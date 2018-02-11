import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import posts from './posts';
import notifications from './notifications';
import auth from './auth';
import profile from './profile';

export default combineReducers ({
    router,
    posts,
    notifications,
    auth,
    profile,
});