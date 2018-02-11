// core

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch, withRouter } from 'react-router';

import pages from './pages';
import authActions from 'actions/auth';
import uiActions from 'actions/ui';
import { getAuthenticated} from '../selectors/auth';

import Public from './public';
import Private from './private';

import Catcher from 'components/Catcher';
import Loading from 'components/Loading';

class Routes extends Component {
    componentDidMount () {
        const { location, history, initialize, authenticated, authenticate } = this.props;

        const token = localStorage.getItem('token');

        token ? authenticate(token) : initialize();

        if(authenticated) {
            if(location.pathname === pages.profile ) {
                return;
            }
        }
    }
    render() {
        const { authenticated, initialized } = this.props;
        console.log(this.props);
        return initialized ? (
            <Catcher>
                <Switch>
                    { !authenticated && <Public /> }
                    <Private />
                </Switch>
            </Catcher>
        ) : (<Loading />);
    }
}

const mapStateToProps = ({ auth, ui }) => ({
    authenticated: getAuthenticated(auth),
    initialized: ui.initialized,
});

const { authenticate } = authActions;
const { initialize } = uiActions;

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
        authenticate,
        initialize,
        },
        dispatch,
    );

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Routes));

