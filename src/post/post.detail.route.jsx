import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPost } from './post.actions';
import {
  currentPost,
  currentPostIsLoading,
  currentPostLoadError
} from './post.selectors';
import { currentUser } from '../user/user.selectors';
import PostDetail from './post.detail';
import Loading from '../components/loading';
import { Link } from 'react-router-dom';

function PostDetailRoute({
  fetchPost,
  match,
  currentPost,
  currentPostLoadError,
  currentPostIsLoading,
  currentUser
}) {
  useEffect(() => {
    const id = match.params.id;
    fetchPost(id);
  }, [fetchPost, match.params.id]);

  return (
    <div>
      {currentPostIsLoading && <Loading></Loading>}
      {currentPostLoadError && (
        <div>
          <h4 className="has-text-danger">Unable to find requested item</h4>
          <span>
            Go to <Link to="/posts">Posts</Link>
          </span>
        </div>
      )}
      {currentPost && !currentPostIsLoading && (
        <PostDetail {...currentPost} user={currentUser} />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentPost,
  currentPostIsLoading,
  currentPostLoadError,
  currentUser
});

const mapDispatchToProps = {
  fetchPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailRoute);
