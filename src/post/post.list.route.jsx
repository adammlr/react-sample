import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchPosts, postListData, postListIsLoading } from './post.list.duck';
import PostListItem from './post.list.item';
import Loading from '../components/loading';
import Title from '../components/title';

function PostListRoute({ postListData, postListIsLoading, fetchPosts }) {
  useEffect(() => {
    if (!postListData) {
      fetchPosts();
    }
  }, [postListData, fetchPosts]);

  return (
    <div>
      <Title title="Posts"></Title>
      {postListIsLoading && <Loading></Loading>}
      {postListData &&
        postListData.map(post => <PostListItem key={post.id} {...post} />)}
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  postListData,
  postListIsLoading
});

const mapDispatchToProps = {
  fetchPosts
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostListRoute);
