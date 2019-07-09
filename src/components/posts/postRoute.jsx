import React from 'react';
import { connect } from 'react-redux';
import { fetchPost } from 'redux/post/postActions';
import PostDetail from './postDetail';
import Loading from '../shared/loading';
import { Link } from 'react-router-dom';

class PostRoute extends React.Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.loadPost(id);
  }

  render() {
    return (
      <div>
        {this.props.isLoading && <Loading></Loading>}
        {this.props.loadError && (
          <div>
            <h4 className="has-text-danger">Unable to find requested item</h4>
            <span>
              Go to <Link to="/posts">Posts</Link>
            </span>
          </div>
        )}
        {this.props.post && !this.props.isLoading && (
          <PostDetail {...this.props.post} user={this.props.user} />
        )}
      </div>
    );
  }
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
