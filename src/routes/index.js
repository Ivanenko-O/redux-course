// core

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router';

import pages from './pages';
import authActions from 'actions/auth';
import { getAuthenticated} from '../selectors/auth';

import Public from './public';
import Private from './private';

import Catcher from 'components/Catcher';
import Loading from 'components/Loading';

class Routes extends Component {
    render() {
        const { authenticated, initialized } = this.props;

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

export default connect(mapStateToProps)(Routes);

