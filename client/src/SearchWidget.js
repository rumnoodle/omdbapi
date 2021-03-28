import React from 'react';

class SearchWidget extends React.Component {
  render() {
    return (
      <div id="movie-search">
        <input name="search" type="text" id="search" />
      </div>
    );
  }
}

export default SearchWidget;
