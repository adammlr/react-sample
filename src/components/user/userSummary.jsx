import React from 'react';
import PropTypes from 'prop-types';

class UserSummary extends React.Component {
  render() {
    return <h2 className="subtitle">By: {this.props.name}</h2>;
  }
}

UserSummary.propTypes = {
  name: PropTypes.string
};

export default UserSummary;
