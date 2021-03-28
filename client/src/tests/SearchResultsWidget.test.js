import {shallow} from 'enzyme';
import React from 'react';
import SearchResultsWidget from '../SearchResultsWidget';

describe("SearchResultsWidget", () => {
  let widget;

  beforeEach(() => {
  });

  it("should show no results if there are no results", () => {
    widget = shallow(<SearchResultsWidget hits={[]} />);
    expect(
      widget.find('table.hits tbody tr').length
    ).toBe(0);
  });

  it("should show results if there are any", () => {
    const hits = [
      {
        Title: 'The imitation Game',
        Year: '2014',
        imdbID: 'tt2084970',
        Type: 'movie'
      },
      {
        Title: 'The Imitation Game',
        Year: '2018',
        imdbID: 'tt8938060',
        Type: 'series'
      },
      {
        Title: 'The Imitation Game',
        Year: '2008',
        imdbID: 'tt1632635',
        Type: 'movie'
      }
    ];

    widget = shallow(<SearchResultsWidget hits={hits} />);
    expect(
      widget.find('table.hits tbody tr').length
    ).toBe(3);
  });
});
