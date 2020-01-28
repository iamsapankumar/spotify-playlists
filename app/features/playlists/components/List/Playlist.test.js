/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import Playlist from './Playlist';

it('renders correctly', () => {
  renderer.create(<Playlist />);
});
describe('Playlist', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<Playlist />);
      expect(component).toMatchSnapshot();
    });
  });
});
