import React from 'react';

class SearchWidget extends React.Component {
  render() {
    return (
      <div id="movie-search">
        <input name="search" type="text" id="search" />
        <input type="submit" value="Search" disabled />
      </div>
    );
  }
}

export default SearchWidget;
