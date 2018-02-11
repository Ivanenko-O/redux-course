// Core
import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getPosts } from 'selectors/posts/index';
import postsActions from 'actions/posts';

// Components
import Spinner from 'components/Spinner';
import Notifications from 'components/Notifications';
import Catcher from 'components/Catcher';
import Wall from 'components/Wall';

class Feed extends Component {
    render () {
        const { actions, posts } = this.props;

        return (
            <Fragment>
                <Spinner />
                <Notifications />
                <Catcher>
                    <Wall actions = { actions } posts = { posts }/>
                </Catcher>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    // из-за редьюсера и fromJS, плохая практика
    posts: getPosts(state),
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators({ ...postsActions }, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps )(Feed);
