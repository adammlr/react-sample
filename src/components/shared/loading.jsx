import React from 'react';

function Loading() {
  return (
    <div class="columns is-mobile">
      <div class="column is-half is-offset-one-quarter">
        <progress className="progress is-primary" max="100"></progress>
      </div>
    </div>
  );
}

export default Loading;
