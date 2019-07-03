import React from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../../redux/posts/postsActions';

class Search extends React.Component {
  componentDidMount() {
    if (this.props.posts === null) {
      this.props.loadPosts();
    }
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <h1 className="title">Posts</h1>
          {this.props.posts &&
            this.props.posts.map(post => (
              <div key={post.id}>
                <span>{post.title}</span>
              </div>
            ))}
        </div>
      </section>
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
)(Search);
