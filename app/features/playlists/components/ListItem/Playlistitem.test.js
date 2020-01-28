/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import PlaylistItem from './Playlistitem';

it('renders correctly', () => {
  renderer.create(<PlaylistItem />);
});
describe('PlaylistItem', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<PlaylistItem />);
      expect(component).toMatchSnapshot();
    });
  });
});
