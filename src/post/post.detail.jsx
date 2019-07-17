import React from 'react';
import UserSummary from '../user/user.summary';

function PostDetail({ title, user, body }) {
  return (
    <div>
      <h1 className="title">{title}</h1>
      <UserSummary className="sub-title" {...user}></UserSummary>
      <p>{body}</p>
    </div>
  );
}

export default PostDetail;
