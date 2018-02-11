// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import './theme/reset.css';
import store, { history } from './store';
import Routes from './routes';

// Flux
import Feed from './containers/Feed';

window.x = history;

render( <Provider store = { store }>
            <Router history = { history }>
                    {/*<Feed />*/}
                <Routes />
            </Router>
        </Provider>,
    document.getElementById('root'));


// import './intro/redux-flow';