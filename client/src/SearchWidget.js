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
        <table className="hits">
          <thead>
            <tr>
              <th>Title</th>
              <th>Release Year</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.hits.map((hit) => (
                <tr key={hit['imdbID']}>
                  <td>{hit['Title']}</td>
                  <td>{hit['Year']}</td>
                  <td>{hit['Type']}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    );
  }
}

export default SearchWidget;
