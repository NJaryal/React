import React from 'react';
import { shallow } from 'enzyme';
import 'babel-polyfill';

import ReactDOM from 'react-dom';
import App from './App';

const setup = () => {
  const component = shallow(<App />);
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

