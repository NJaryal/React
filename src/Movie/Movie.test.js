import React from 'react';
import { shallow } from 'enzyme';
import { Movie } from './Movie';
import { checkProps } from '../../__tests__/Utils';

const setup = () => {
  const component = shallow(<Movie />);
  return component;
};

describe('Movie component', () => {
  describe('Check PropTypes', () => {
    it('should not throw a warning', () => {
      const expectedprops = {
        match: {},
      };
      const propdError = checkProps(Movie, expectedprops);
      expect(propdError).toBeUndefined();
    });
  });


  describe('Check PropTypes', () => {
    let component;
    beforeEach(() => {
      component = setup();
    });

    it('should render Component', () => {
      expect(component).toMatchSnapshot();
    });
  });
});
