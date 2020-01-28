/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import PlaylistService from './PlaylistService';


describe('PlaylistService', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<PlaylistService />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Functions', () => {
    test('fetch playlist function', () => {
      const wrapper = Enzyme.shallow(<PlaylistService />);
      const action = wrapper.instance().fetchPlaylists();
      expect(action).toEqual(true);
    });
  });
});
