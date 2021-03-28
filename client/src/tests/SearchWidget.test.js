import {shallow} from 'enzyme';
import React from 'react';
import SearchWidget from '../SearchWidget';
import API from '../API';

jest.mock('../API');

describe("SearchWidget", () => {
  let widget;

  beforeEach(() => {
    widget = shallow(<SearchWidget />);
  });

  afterEach(() => {
    API.searchMovies.mockClear();
  });

  it("should load search field", () => {
    expect(
      widget.find('input[name="search"]').length
    ).toEqual(1);
  });

  it("should disable submit button when empty search field", () => {
    const submitButton = widget.find('input[type="submit"]').first();
    expect(
      submitButton.props().disabled
    ).toBe(true);
  });

  describe("when making a search", () => {
    const searchValue = "Imitation Game";

    beforeEach(() => {
      const searchInputField = widget.find('input[name="search"]').first();
      searchInputField.simulate('change', {
        target: {value: searchValue}
      });
    });

    it("should enable submit button", () => {
      const submitButton = widget.find('input[type="submit"]').first();
      expect(
        submitButton.props().disabled
      ).toBe(false);
    });

    describe("when deleting the search", () => {
      const searchValue = "";

      beforeEach(() => {
        const searchInputField = widget.find('input[name="search"]').first();
        searchInputField.simulate('change', {
          target: {value: searchValue}
        });
      });

      it("should disable submit button when search field content is deleted", () => {
        const submitButton = widget.find('input[type="submit"]').first();
        expect(
          submitButton.props().disabled
        ).toBe(true);
      });
    });

    describe("when making a search", () => {
      const hits = {
        Response: 'True',
        totalResults: '3',
        Search: [
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
        ]
      };

      beforeEach(() => {
        const submitButton = widget.find('input[type="submit"]').first();
        submitButton.simulate('click');
        const invocationArgs = API.searchMovies.mock.calls[0];
        const callback = invocationArgs[1];
        callback(hits);
        widget.update();
      });

      it("should set state hits to search results", () => {
        expect(
          widget.state().hits
        ).toEqual(hits['Search']);
      });

      it("should display what last search was", () => {
        expect(
          widget.html()
        ).toContain("Imitation Game");
      });

      it("should disable search button", () => {
        const submitButton = widget.find('input[type="submit"]').first();
        expect(
          submitButton.props().disabled
        ).toBe(true);
      });

      it("should clear search state", () => {
        expect(
          widget.state().searchString
        ).toEqual('');
      });
    });
  });
});
