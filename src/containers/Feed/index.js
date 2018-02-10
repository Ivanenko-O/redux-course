// Core
import React, { Component, Fragment } from 'react';

// Components
import Spinner from 'components/Spinner';
import Catcher from 'components/Catcher';
import Wall from 'components/Wall';

export default class Feed extends Component {
    render () {
        return (
            <Fragment>
                <Spinner />
                <Catcher>
                    <Wall />
                </Catcher>
            </Fragment>
        );
    }
}
