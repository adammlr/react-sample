import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'redux/posts/postsActions';
import Post from './postListItem';
import Loading from '../shared/loading';

function PostsRoute({ posts, isLoading, loadPosts }) {
  useEffect(() => {
    if (posts === null) {
      loadPosts();
    }
  }, [posts, loadPosts]);

  return (
    <div>
      <h1 className="title">Posts</h1>
      {isLoading && <Loading></Loading>}
      {posts && posts.map(post => <Post key={post.id} {...post} />)}
    </div>
  );
}

const mapStateToProps = state => {
  return {
    isLoading: state.posts.isLoading,
    posts: state.posts.posts
  };
};

const mapDispatchToProps = dispatch => {
  return {
    loadPosts: () => {
      dispatch(fetchPosts());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsRoute);
