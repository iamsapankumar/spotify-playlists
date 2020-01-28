/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import PlaylistContainer from './PlaylistContainer';


it('renders correctly', () => {
  renderer.create(<PlaylistContainer />);
});
describe('PlaylistContainer', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<PlaylistContainer />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Rendering', () => {
    // const props = { ...defaultProps };

    test('Render matches initial load', () => {
      const wrapper = Enzyme.shallow(<PlaylistContainer />);
      const action = wrapper.instance().onError();
      expect(action).toEqual(true);
    });
  });
});
