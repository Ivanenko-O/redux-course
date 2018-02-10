// Core
import React, { Component, Fragment } from 'react';

// Components
import Notifications from 'components/Notifications';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import LoginForm from 'components/Forms/Login';

export default class Login extends Component {
    render () {
        return (
            <Fragment>
                <Notifications />
                <Spinner />
                <Navigation />
                <Catcher>
                    <LoginForm />
                </Catcher>
            </Fragment>
        );
    }
}
