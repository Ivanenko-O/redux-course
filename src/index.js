// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter as Router } from 'react-router-redux';

// Instruments
import './theme/reset.css';
import store, { history } from './store';

// Flux
import Feed from './containers/Feed';

window.x = history;

render( <Provider store = { store }>
            <Router history = { history }>
                    <Feed />
            </Router>
        </Provider>,
    document.getElementById('root'));


// import './intro/redux-flow';