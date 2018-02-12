// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import authActions from 'actions/auth';

// Components
import Notifications from 'components/Notifications';
import Spinner from 'components/Spinner';
import Navigation from 'components/Navigation';
import Catcher from 'components/Catcher';
import LoginForm from 'components/Forms/Login';

class Login extends Component {
    render () {
        const { authFetching, login } = this.props;

        return (
            <Fragment>
                <Notifications />
                <Spinner spin = { authFetching } />
                <Navigation />
                <Catcher>
                    <LoginForm authFetching = { authFetching } login = { login } />
                </Catcher>
            </Fragment>
        );
    }
}

const mapStateToProps = ({ ui }) => ({
    authFetching: ui.authFetching,
});

const mapDispatchToProps = (dispatch) => ({
    login: bindActionCreators(authActions.login, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps )(Login);

