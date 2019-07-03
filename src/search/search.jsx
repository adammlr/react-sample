import React from 'react';

function Search() {
  return (
    <section class="section">
      <div class="container">
        <div class="columns">
          <div class="column">
            <div class="field has-addons">
              <div class="control is-expanded">
                <input class="input" type="text" placeholder="Search Tweets" />
              </div>
              <div class="control">
                <button class="button is-info">Search</button>
              </div>
            </div>
          </div>
          <div class="column"></div>
        </div>
      </div>
    </section>
  );
}

export default Search;
