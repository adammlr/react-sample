import React from 'react';
import PropTypes from 'prop-types';
import UserSummary from '../user/userSummary';

function PostDetail({ title, user, body }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <UserSummary className="sub-title" {...user}></UserSummary>
      <p>{body}</p>
    </div>
  );
}

PostDetail.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string
};

export default PostDetail;
