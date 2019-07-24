import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../Utils';
import { Search } from './Search';

const setup = (props = {}) => {
  const component = shallow(<Search {...props} />);
  return component;
};

describe('Search component', () => {
  describe('should render Search', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
  
    it('should render Search', () => {
      const findMovieText = findByTestAttr(component, 'SearchComponent');
      expect(findMovieText.length).toBe(1);
    });
  });

  describe('show', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it('Snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
