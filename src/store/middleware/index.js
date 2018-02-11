// export const notify = (store) => (next) => (action) => { из сторе достаем дипатч

import notificationActions from 'actions/notifications';

export const notify = ({ dispatch }) => (next) => (action) => {
    if (action.error){
        dispatch(notificationActions.invoke(action.payload));
    }

    next(action);
};