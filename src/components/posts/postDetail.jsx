import React from 'react';
import PropTypes from 'prop-types';
import UserSummary from '../user/userSummary';

class PostDetail extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <UserSummary className="sub-title" {...this.props.user}></UserSummary>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

PostDetail.propTypes = {
  user: PropTypes.object,
  title: PropTypes.string,
  body: PropTypes.string
};

export default PostDetail;
