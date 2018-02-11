// core

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Switch } from 'react-router';

import pages from './pages';
import authActions from 'actions/auth';
import { getAuthenticated} from '../selectors/auth';

import Public from './Public';
import Private from './Private';


import Catcher from 'components/Catcher';
import Loading from 'components/Loading';
import {getAuthenticated} from "../selectors/auth/index";

class Routes extends Component {
    render() {
        const { authenticated } = this.props;
        return (
            <Catcher>
                <Switch>
                    { !authenticated && <Public /> }
                    <Private />
                </Switch>
            </Catcher>
        )
    }
}

const mapStateToProps = ({ auth}) => ({
    authenticated: getAuthenticated(auth),
});

export default connect(mapStateToProps)(Routes);

