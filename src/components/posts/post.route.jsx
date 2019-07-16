import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPost } from 'redux/post/post.actions';
import {
  selectPost,
  selectIsLoading,
  selectLoadError
} from 'redux/post/post.selectors';
import { selectUser } from 'redux/user/user.selectors';
import PostDetail from './post.detail';
import Loading from '../shared/loading';
import { Link } from 'react-router-dom';

function PostRoute({ loadPost, match, isLoading, loadError, post, user }) {
  useEffect(() => {
    const id = match.params.id;
    loadPost(id);
  }, [loadPost, match.params.id]); // Only re-run the effect if count changes

  return (
    <div>
      {isLoading && <Loading></Loading>}
      {loadError && (
        <div>
          <h4 className="has-text-danger">Unable to find requested item</h4>
          <span>
            Go to <Link to="/posts">Posts</Link>
          </span>
        </div>
      )}
      {post && !isLoading && <PostDetail {...post} user={user} />}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsLoading,
  loadError: selectLoadError,
  post: selectPost,
  user: selectUser
});

const mapDispatchToProps = dispatch => {
  return {
    loadPost: id => {
      dispatch(fetchPost(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostRoute);
