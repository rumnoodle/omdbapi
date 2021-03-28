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
    API.searchMovies(this.state.searchString, (result) => {
      const hits = result['Search'].map((hit) => {
        return hit;
      });
      this.setState({
        hits: hits
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
      </div>
    );
  }
}

export default SearchWidget;
