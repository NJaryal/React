import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

const setup = () => {
  const component = shallow(<NotFound />);
  return component;
};

describe('NotFound component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render Component', () => {
    expect(component).toMatchSnapshot();
  });
});
