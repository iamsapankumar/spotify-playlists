/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders correctly', () => {
  renderer.create(<Header />);
});
describe('Header', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<Header />);
      expect(component).toMatchSnapshot();
    });
  });
});
