/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import moment from 'moment';
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
      const authenticate = wrapper.instance().authenticate({ token: '', tokenDate: '' });
      return authenticate
        .then(
          (data) => expect(data).toEqual(true),
        );
    });
    test('is token valid returning false when no inputs', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      const isValidFunction = wrapper.instance().isTokenValid({ token: '', tokenDate: '' });
      expect(isValidFunction).toEqual(false);
    });
    test('is token valid in the range of date?', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      const now = moment().format('X');
      const isValidFunction = wrapper.instance().isTokenValid({ token: '3214123', tokenDate: now });
      expect(isValidFunction).toEqual(true);
    });
    test('is token out of date?', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      const now = moment().format('X');
      const isValidFunction = wrapper.instance().isTokenValid({ token: '3214123', tokenDate: now - 3601 });
      expect(isValidFunction).toEqual(false);
    });
    test('is rehydrating?', async () => {
      const wrapper = Enzyme.shallow(<AuthProvider />);
      const isValidFunction = wrapper.instance().rehydrateAuthState();
      return isValidFunction
        .then(
          (data) => expect(data).toEqual(true),
        );
    });
  });
});
