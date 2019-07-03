import React from 'react';
import { connect } from 'react-redux';
import { search } from '../redux/actions';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchText: props.searchText };
  }

  updateInput = searchText => {
    this.setState({ searchText });
  };

  handleSearch = () => {
    this.props.search(this.state.searchText);
  };

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="field has-addons">
                <div className="control is-expanded">
                  <input
                    className="input"
                    type="text"
                    placeholder="Search Tweets"
                    onChange={e => this.updateInput(e.target.value)}
                    value={this.state.searchText}
                  />
                </div>
                <div className="control">
                  <button
                    className="button is-info"
                    onClick={this.handleSearch}
                  >
                    Search
                  </button>
                </div>
              </div>
            </div>
            <div className="column"></div>
          </div>
        </div>
      </section>
    );
  }
}

const mapStateToProps = state => {
  return { searchText: state.search.searchText };
};

export default connect(
  mapStateToProps,
  { search }
)(Search);
