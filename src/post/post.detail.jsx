import React from 'react';
import UserSummary from '../user/user.summary';
import Title from '../components/title';

function PostDetail({ title, user, body }) {
  return (
    <div>
      <Title title={title}></Title>
      <UserSummary className="sub-title" {...user}></UserSummary>
      <p>{body}</p>
    </div>
  );
}

export default PostDetail;
