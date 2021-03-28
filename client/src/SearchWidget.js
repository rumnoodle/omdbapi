import React from 'react';
import API from './API';
import './SearchWidget.css';
import SearchResultsWidget from './SearchResultsWidget';

class SearchWidget extends React.Component {
  state = {
    searchString: '',
    disabled: true,
    hits: []
  };

  onSearchChange = (e) => {
    const value = e.target.value;
    this.setState({
      searchString: value
    });

    if (value !== '') {
      this.setState({
        disabled: false
      });
    } else {
      this.setState({
        disabled: true
      });
    }
  }

  onSearchSubmit = () => {
    const searchString = this.state.searchString;

    API.searchMovies(searchString, (result) => {
      if (result['Response'] === 'False') {
        const error = `Error when searching: ${result['Error']}`;
        this.setState({
          error: error
        });
      } else {

        const hits = result['Search'].map((hit) => {
          return hit;
        });
        this.setState({
          hits: hits,
          lastSearch: searchString,
          searchString: '',
          disabled: true,
          error: ''
        });
      }
    });
  }

  render() {
    return (
      <div id="movie-search">
        <input
          name="search"
          type="text"
          id="search"
          value={this.state.searchString}
          onChange={this.onSearchChange}
        />
        <input
          type="submit"
          value="Search"
          disabled={this.state.disabled}
          onClick={this.onSearchSubmit}
        />
        <div id="error">{this.state.error}</div>
        <div id="last-search">Last search: {this.state.lastSearch}</div>
        <SearchResultsWidget
          hits={this.state.hits}
        />
      </div>
    );
  }
}

export default SearchWidget;
