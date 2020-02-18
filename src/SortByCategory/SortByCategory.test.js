import React from 'react';
import { shallow } from 'enzyme';
import { SortByCategory } from './SortByCategory';
import { findByTestAttr, checkProps } from '../../__tests__/Utils';

const renderSortByCategory = (props = {}) => {
  const component = shallow(<SortByCategory {...props} />);
  return component;
};

describe('SortByCategory component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedprops = {
        count: 10,
        activeSort: 'release',
      };
      const propdError = checkProps(SortByCategory, expectedprops);
      expect(propdError).toBeDefined();
    });
  });

  describe('Have Props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        count: 10,
        activeSort: 'release',
      };
      wrapper = renderSortByCategory(props);
    });
    it('should render', () => {
      const component = findByTestAttr(wrapper, 'SortByCategory');
      expect(component.length).toBe(1);
    });

    it('should render a count', () => {
      const count = findByTestAttr(wrapper, 'count');
      expect(count.length).toBe(1);
    });

    it('should render a activeSort', () => {
      const activeSort = findByTestAttr(wrapper, 'activeSort');
      expect(activeSort.length).toBe(1);
    });
  });

  describe('should show', () => {
    let component;
    beforeEach(() => {
      component = renderSortByCategory();
    });
    it('snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
