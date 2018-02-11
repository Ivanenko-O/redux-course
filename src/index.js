// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

// Instruments
import './theme/reset.css';
import store from './store';

// Flux
import Feed from './containers/Feed';

render( <Provider store = { store }>
            <Feed />
        </Provider>, document.getElementById('root'));


// import './intro/redux-flow';