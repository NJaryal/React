import React from 'react';
import { shallow } from 'enzyme';
import Footer from './Footer';

const setup = () => {
  const component = shallow(<Footer />);
  return component;
};

describe('Footer component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render Component', () => {
    expect(component).toMatchSnapshot();
  });
});
