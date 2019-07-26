import React from 'react';
import { shallow } from 'enzyme';
import NotFound from './NotFound';

const renderNotFound = () => {
  const component = shallow(<NotFound />);
  return component;
};

describe('NotFound component', () => {
  let component;
  beforeEach(() => {
    component = renderNotFound();
  });

  it('should render Component', () => {
    expect(component).toMatchSnapshot();
  });
});
