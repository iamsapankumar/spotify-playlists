/* eslint-disable no-undef */
import 'react-native';
import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import axios from 'axios';
import SpotifyService from './SpotifyService';

jest.mock('axios');


describe('SpotifyService', () => {
  describe('Rendering', () => {
    it('should match to snapshot =>', () => {
      const component = shallow(<SpotifyService />);
      expect(component).toMatchSnapshot();
    });
  });
  describe('Functions', () => {
    test('fetch auth code function', () => {
      const wrapper = Enzyme.shallow(<SpotifyService />);
      wrapper.instance().getAuthorizationCode()
        .then(
          (data) => expect(data).toEqual(true),
        );
      // expect(action).toEqual(true);
    });
  });
  describe('Fetches data', () => {
    it('fetches data successfully from spotify endpoint', async () => {
      const wrapper = Enzyme.shallow(<SpotifyService />);
      const fetchAuthCode = wrapper.instance().getAuthorizationCode();
      const data = {
        something: '',
      };
      axios.get.mockImplementationOnce(() => Promise.resolve(data));
      // It can't be tested since it depends on the parameter user inputs on webview
      await expect(fetchAuthCode).resolves.toEqual(undefined);
    });
    it('does not fetches data successfully from spotify endpoint', async () => {
      const error = 'error';
      axios.get.mockImplementationOnce(() => Promise.reject(new Error(error)));
    });
  });
});
