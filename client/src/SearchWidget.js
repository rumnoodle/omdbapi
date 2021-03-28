import React from 'react';

class SearchWidget extends React.Component {
  state = {
    disabled: true
  };

  onSearchChange = (e) => {
    const value = e.target.value;

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

  render() {
    return (
      <div id="movie-search">
        <input
          name="search"
          type="text"
          id="search"
          onChange={this.onSearchChange}
        />
        <input type="submit" value="Search" disabled={this.state.disabled} />
      </div>
    );
  }
}

export default SearchWidget;
