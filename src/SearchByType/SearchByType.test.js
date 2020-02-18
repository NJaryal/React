import React from 'react';
import { shallow } from 'enzyme';
import { SearchByType } from './SearchByType';
import { findByTestAttr, checkProps } from '../../__tests__/Utils';
import SearchByTypeReducer from './SearchByTypeReducer';
import { SET_SEARCH_BY_GENRE } from './SearchByTypeActions';

const renderSearchByType = (props = {}) => {
  const component = shallow(<SearchByType {...props} />);
  return component;
};

describe('SearchByType component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedprops = {
        activeSearch: 'title',
      };
      const propdError = checkProps(SearchByType, expectedprops);
      expect(propdError).toBeDefined();
    });
  });

  describe('Have Props', () => {
    let wrapper;
    beforeEach(() => {
      const props = {
        activeSearch: 'title',
      };
      wrapper = renderSearchByType(props);
    });

    it('should render a activeSort', () => {
      const activeSort = findByTestAttr(wrapper, 'activeSearch');
      expect(activeSort.length).toBe(1);
    });
  });

  describe('should show', () => {
    let component;
    beforeEach(() => {
      component = renderSearchByType();
    });
    it('snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
