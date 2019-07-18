import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  currentPostData,
  currentPostIsLoading,
  currentPostLoadError,
  fetchPost
} from './post.detail.duck';
import { currentUserData } from '../user/user.detail.duck';
import PostDetail from './post.detail';
import Loading from '../components/loading';
import { Link } from 'react-router-dom';

function PostDetailRoute({
  fetchPost,
  match,
  currentPostData,
  currentPostLoadError,
  currentPostIsLoading,
  currentUserData
}) {
  useEffect(() => {
    const id = match.params.id;
    if (id) {
      fetchPost(id);
    }
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
      {currentPostData && !currentPostIsLoading && (
        <PostDetail {...currentPostData} user={currentUserData} />
      )}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentPostData,
  currentPostIsLoading,
  currentPostLoadError,
  currentUserData
});

const mapDispatchToProps = {
  fetchPost
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostDetailRoute);
