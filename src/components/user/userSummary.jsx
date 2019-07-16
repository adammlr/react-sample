import React from 'react';
import PropTypes from 'prop-types';

function UserSummary({ name }) {
  return <h2 className="subtitle">By: {name}</h2>;
}

UserSummary.propTypes = {
  name: PropTypes.string
};

export default UserSummary;
