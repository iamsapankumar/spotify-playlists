/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
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
      return wrapper.instance().authenticate({ token: '', tokenDate: '' })
        .then(
          (data) => expect(data).toEqual(true),
        );
    });
    test('is token valid returning false when no inputs', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      const isValidFunction = wrapper.instance().isTokenValid({ token: '', tokenDate: '' });
      expect(isValidFunction).toEqual(false);
    });
    test('is token valid returning true when having a value', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      const isValidFunction = wrapper.instance().isTokenValid({ token: '3214123', tokenDate: '314123412' });
      expect(isValidFunction).toEqual(true);
    });
  });
});
