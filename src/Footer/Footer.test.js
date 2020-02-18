import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const renderFooter = () => {
  const component = shallow(<Footer />);
  return component;
};

describe('Footer component', () => {
  let component;
  beforeEach(() => {
    component = renderFooter();
  });

  it('should render without errors', () => {
    expect(component).toMatchSnapshot();
  });
});
