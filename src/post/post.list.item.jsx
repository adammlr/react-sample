import React from 'react';
import { Link } from 'react-router-dom';

function PostListItem({ id, title }) {
  return (
    <div>
      <Link to={`/post/${id}`}>{title}</Link>
    </div>
  );
}

export default PostListItem;
