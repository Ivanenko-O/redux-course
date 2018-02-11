// core
import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router';

// instruments
import pages from 'routes/pages';

// components
import Login from 'containers/Login';
import Signup from 'containers/Signup';

export default class Public extends Component {
    render () {
        return (
            <Switch>
                <Route component = { Login } exact path = { pages.login } />
                <Route component = { Signup } exact  path = { pages.signUp } />
                <Redirect to = { pages.login } />
            </Switch>
        );
    }
}