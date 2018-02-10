// Core
import React, { Component, Fragment } from 'react';

// Components
import Notifications from 'components/Notifications';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import SignupForm from 'components/Forms/Signup';

export default class Signup extends Component {
    render () {
        return (
            <Fragment>
                <Notifications />
                <Spinner />
                <Navigation />
                <Catcher>
                    <SignupForm />
                </Catcher>
            </Fragment>
        );
    }
}
