import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import App from './App';

const setup = () => {
  const component = shallow(<App />).childAt(0).dive();
  return component;
};

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = setup();
  });

  it('should render Component', () => {
    expect(component).toMatchSnapshot();
  });
});

