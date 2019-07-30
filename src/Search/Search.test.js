import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr } from '../../__tests__/Utils';
import { Search } from './Search';

const renderSearch = (props = {}) => {
  const component = shallow(<Search {...props} />);
  return component;
};

describe('Search', () => {
  let component;
  beforeEach(() => {
    component = renderSearch();
  });
  it('should render', () => {
    const findMovieText = findByTestAttr(component, 'SearchComponent');
    expect(findMovieText.length).toBe(1);
  });

  it('Snapshot', () => {
    expect(component).toMatchSnapshot();
  });
});

