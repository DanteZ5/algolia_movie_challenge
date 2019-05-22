import React, { Component } from 'react';

class SearchBar extends Component {
  handleUpdate = (event) => {
    // this.props.searchFunction(event.target.value);
    this.props.algoliaSearchFunction(event.target.value);
    console.log(event.target.value);
  }

  render() {
    return (
      <input
        type="text"
        className="form-control form-search search-bar"
        onChange={this.handleUpdate}
      />
    );
  }
}

export default SearchBar;
