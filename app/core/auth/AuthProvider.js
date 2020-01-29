/* eslint-disable react/jsx-closing-bracket-location */

import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '@babel/types';
import moment from 'moment';
import AuthContext from './AuthContext';

export const AUTH_KEY = 'token';
export const TOKEN_DATE = 'token_date';

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resolved: false,
      token: '',
      tokenDate: '',
      currentUser: null,
      isAuthenticated: false,
      rehydrated: false,
    };
  }

  componentDidMount = async () => {
    this.rehydrateAuthState();
    // this.logout();
  }

  rehydrateAuthState = async () => {
    const token = await AsyncStorage.getItem(AUTH_KEY);
    const tokenDate = await AsyncStorage.getItem(TOKEN_DATE);

    this.isTokenValid({ token, tokenDate });
  }

  isTokenValid = ({ token, tokenDate }) => {
    if (undefined === token) {
      return false;
    }
    // Do we have a token?
    if (token === '' || tokenDate === '') {
      return false;
    }

    // Is the token out of date?
    const now = moment().format('X');
    if ((now - tokenDate) > 3600) {
      this.setState({ isAuthenticated: false, rehydrated: true });
    } else {
      this.setState({ isAuthenticated: true, rehydrated: true, token });
    }
    return true;
  }

  /**
   * Authenticate and persist it on AsyncStorage
   */
  authenticate = async ({ token = '', tokenDate = '' }) => {
    this.setState({
      token,
      tokenDate,
      resolved: true,
      isAuthenticated: true,
    });
    await AsyncStorage.setItem(AUTH_KEY, token);
    await AsyncStorage.setItem(TOKEN_DATE, tokenDate);
    return true;
  };

  /**
   * Logout
   * TODO: Needs to be refactored to only clean AUTH_KEY
   */
  logout = async () => {
    await AsyncStorage.clear();
    return true;
  };

  render() {
    return (
      <AuthContext.Provider
        value={{
          ...this.state,
          authenticate: this.authenticate,
          logout: this.logout,
        }}>
        {this.props.children}
      </AuthContext.Provider>
    );
  }
}
AuthProvider.propTypes = {
  children: PropTypes.object,
};
AuthProvider.defaultProps = {
  children: {},
};
export default AuthProvider;
