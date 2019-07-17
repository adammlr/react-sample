import React from 'react';

function Loading() {
  return (
    <div className="columns is-mobile">
      <div className="column is-half is-offset-one-quarter">
        <progress className="progress is-primary" max="100"></progress>
      </div>
    </div>
  );
}

export default Loading;
