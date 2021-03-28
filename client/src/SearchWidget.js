import React from 'react';
import API from './API';

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
      const hits = result['Search'].map((hit) => {
        return hit;
      });
      this.setState({
        hits: hits,
        lastSearch: searchString,
        searchString: '',
        disabled: true
      });
    });


  }

  render() {
    return (
      <div id="movie-search">
        <input
          name="search"
          type="text"
          id="search"
          onChange={this.onSearchChange}
        />
        <input
          type="submit"
          value="Search"
          disabled={this.state.disabled}
          onClick={this.onSearchSubmit}
        />
        <div id="last-search">Last search: {this.state.lastSearch}</div>
      </div>
    );
  }
}

export default SearchWidget;
