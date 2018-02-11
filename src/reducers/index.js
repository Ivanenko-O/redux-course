import { combineReducers } from 'redux';


import posts from './posts';
import notifications from './notifications';

export default combineReducers ({
    posts,
    notifications,
});