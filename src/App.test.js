import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';
import App from './App';

const AppRender = () => {
  const component = shallow(<App />).childAt(0).dive();
  return component;
};

describe('App Component', () => {
  let component;
  beforeEach(() => {
    component = AppRender();
  });

  it('should render Component', () => {
    expect(component).toMatchSnapshot();
  });
});

