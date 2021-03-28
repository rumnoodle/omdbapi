import {shallow} from 'enzyme';
import React from 'react';
import SearchWidget from '../SearchWidget';

describe("SearchWidget", () => {
  let widget;

  beforeEach(() => {
    widget = shallow(<SearchWidget />);
  });

  it("should load search field", () => {
    expect(
      widget.find('input[name="search"]').length
    ).toEqual(1);
  });

  it("should load submit button", () => {
    expect(
      widget.find('input[type="submit"]').length
    ).toEqual(1);
  });
});
