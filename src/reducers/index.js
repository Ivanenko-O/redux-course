import { combineReducers } from 'redux';
import { routerReducer as router } from 'react-router-redux';

import posts from './posts';
import notifications from './notifications';
import auth from './auth';
import profile from './profile';
import ui from './ui';
import forms from './forms';
import users from './users';

export default combineReducers ({
    router,
    posts,
    notifications,
    auth,
    profile,
    ui,
    forms,
    users,
});