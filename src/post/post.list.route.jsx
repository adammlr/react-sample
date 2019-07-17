import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPosts } from './post.actions';
import { postList, postListIsLoading } from './post.selectors';
import PostListItem from './post.list.item';
import Loading from '../components/loading';
import Title from '../components/title';

function PostListRoute({ postList, postListIsLoading, fetchPosts }) {
  useEffect(() => {
    if (postList === null) {
      fetchPosts();
    }
  }, [postList, fetchPosts]);

  return (
    <div>
      <Title title="Posts"></Title>
      {postListIsLoading && <Loading></Loading>}
      {postList &&
        postList.map(post => <PostListItem key={post.id} {...post} />)}
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
