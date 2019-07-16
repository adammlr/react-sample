import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from 'redux/post/postActions';
import PostDetail from './postDetail';
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

const mapStateToProps = state => {
  return {
    isLoading: state.post.isLoading,
    loadError: state.post.loadError,
    post: state.post.post,
    user: state.user.user
  };
};

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
