import React from 'react';

class SearchResultsWidget extends React.Component {
  render() {
    return (
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
            this.props.hits.map((hit, index) => (
              <tr key={hit['imdbID'] + '-' + index}>
                <td>{hit['Title']}</td>
                <td>{hit['Year']}</td>
                <td>{hit['Type']}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    );
  }
}

export default SearchResultsWidget;
