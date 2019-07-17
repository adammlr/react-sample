import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function PostListItem({ id, title }) {
  return (
    <div>
      <Link to={`/post/${id}`}>{title}</Link>
    </div>
  );
}

PostListItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string
};

export default PostListItem;
