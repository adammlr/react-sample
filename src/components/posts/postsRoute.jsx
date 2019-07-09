import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from 'redux/posts/postsActions';
import Post from './postListItem';
import Loading from '../shared/loading';

class PostsRoute extends React.Component {
  componentDidMount() {
    if (this.props.posts === null) {
      this.props.loadPosts();
    }
  }

  render() {
    return (
      <div>
        <h1 className="title">Posts</h1>
        {this.props.isLoading && <Loading></Loading>}
        {this.props.posts &&
          this.props.posts.map(post => <Post key={post.id} {...post} />)}
      </div>
    );
  }
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
