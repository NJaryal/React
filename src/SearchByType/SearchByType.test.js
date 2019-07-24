import React from 'react';
import { shallow } from 'enzyme';
import { SearchByType } from './SearchByType';
import { findByTestAttr, checkProps } from '../../Utils';
import SearchByTypeReducer from './SearchByTypeReducer';
import { SET_SEARCH_BY_GENRE } from './SearchByTypeActions';

const setup = (props = {}) => {
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
      wrapper = setup(props);
    });

    it('should render a activeSort', () => {
      const activeSort = findByTestAttr(wrapper, 'activeSearch');
      expect(activeSort.length).toBe(1);
    });
  });

  describe('reducer', () => {
    it('should return default state', () => {
      const newState = SearchByTypeReducer(undefined, {});
      expect(newState).toEqual({ 
        activeSearch: 'title',
      });
    });

    it('should return new state if receiving Type', () => {
      const SearchBy = { activeSearch: 'genre' };
      const newState = SearchByTypeReducer(undefined, {
        type: SET_SEARCH_BY_GENRE,
        payload: SearchBy,
      });
      expect(newState).toEqual(SearchBy);
    });
  });

  describe('should show', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });
    it('snapshot', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
