import React from 'react';
import PropTypes from 'prop-types';

class PostDetail extends React.Component {
  render() {
    return (
      <div>
        <h1 className="title">{this.props.title}</h1>
        <p>{this.props.body}</p>
      </div>
    );
  }
}

PostDetail.propTypes = {
  userId: PropTypes.number,
  id: PropTypes.number,
  title: PropTypes.string,
  body: PropTypes.string
};

export default PostDetail;
