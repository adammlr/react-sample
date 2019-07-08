import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

class PostListItem extends React.Component {
  render() {
    return (
      <div>
        <Link to={`/post/${this.props.id}`}>{this.props.title}</Link>
      </div>
    );
  }
}

PostListItem.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
};

export default PostListItem;
