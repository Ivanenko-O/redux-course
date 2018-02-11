import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware} from 'react-router-redux';
import { createLogger } from 'redux-logger';
import { createBrowserHistory } from 'history';
import thunk from 'redux-thunk';
import { notify } from './middleware';


import reducer from 'reducers';

// Environment check
const dev = process.env.NODE_ENV === 'development'; // eslint-disable-line
const devtools = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = dev && devtools ? devtools : compose;

const history = createBrowserHistory();
const middleware = [thunk, routerMiddleware(history)];

// This is a middleware
const logger = createLogger({
    duration:  true,
    collapsed: true,
    diff:      true,
    colors:    {
        title:     () => '#139BFE',
        prevState: () => '#1C5FAF',
        action:    () => '#149945',
        nextState: () => '#A47104',
        error:     () => '#ff0005',
    },
});

if (dev) {
    middleware.push(logger);
    middleware.push(notify);
}
export { history };
export default createStore(reducer, composeEnhancers(applyMiddleware(...middleware)));