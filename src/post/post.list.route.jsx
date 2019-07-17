import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPosts } from './post.actions';
import { postList, postListIsLoading } from './post.selectors';
import Post from './post.list.item';
import Loading from '../components/loading';

function PostListRoute({ postList, postListIsLoading, fetchPosts }) {
  useEffect(() => {
    if (postList === null) {
      fetchPosts();
    }
  }, [postList, fetchPosts]);

  return (
    <div>
      <h1 className="title">Posts</h1>
      {postListIsLoading && <Loading></Loading>}
      {postList && postList.map(post => <Post key={post.id} {...post} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  postList,
  postListIsLoading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListRoute);
