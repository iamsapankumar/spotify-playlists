/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
// import Adapter from 'enzyme-adapter-react-16';
// import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import AuthProvider from './AuthProvider';


describe('AuthProvider', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<AuthProvider />);
      expect(component).toMatchSnapshot();
    });
  });

  describe('Functions', () => {
    test('logout function', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      return wrapper.instance().logout()
        .then(
          (data) => expect(data).toEqual(true),
        );
    });
    test('authenticate function', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      return wrapper.instance().authenticate({ user: '', token: '' })
        .then(
          (data) => expect(data).toEqual(true),
        );
    });
  });
});
