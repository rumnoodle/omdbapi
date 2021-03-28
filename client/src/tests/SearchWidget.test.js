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

  it("should disable submit button when empty search field", () => {
    const submitButton = widget.find('input[type="submit"]').first();
    expect(
      submitButton.props().disabled
    ).toBe(true);
  });
});
