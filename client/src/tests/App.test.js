import {shallow} from 'enzyme';
import React from 'react';
import App from '../App';

describe('App is loaded', () => {
  it("should load application", () => {
    const wrapper = shallow(<App />);
    expect(
      wrapper.find('div.App').length
    ).toEqual(1);
  });
});
