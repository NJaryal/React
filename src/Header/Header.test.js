import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

const renderHeader = () => {
  const component = shallow(<Header />);
  return component;
};

describe('Header component', () => {
  let component;
  beforeEach(() => {
    component = renderHeader();
  });

  it('should render Component', () => {
    expect(component).toMatchSnapshot();
  });
});
