/* eslint-disable react/jsx-closing-bracket-location */

import React from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '@babel/types';
import AuthContext from './AuthContext';

export const AUTH_KEY = 'token';

class AuthProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      resolved: false,
      token: '',
      currentUser: null,
      isAuthenticated: false,
    };
  }


  /**
   * Authenticate and persist it on AsyncStorage
   */
  authenticate = async ({ token = '' }) => {
    this.setState({
      token,
      resolved: true,
      isAuthenticated: true,
    });
    await AsyncStorage.setItem(AUTH_KEY, token);

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
