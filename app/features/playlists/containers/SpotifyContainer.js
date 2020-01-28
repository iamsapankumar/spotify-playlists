/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import { Alert } from 'react-native';
import React, { Component } from 'react';
import AuthContext from '../../../core/auth/AuthContext';
import SpotifyServices from '../../../core/playlists/services.js/SpotifyService';


class SpotifyContainerUnplugged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      response: '',
    };
  }


  onError(e) {
    this.ErrorAlert('Something went wrong', e);
    return true;
  }

  /**
   * Error alert component
   * @param {string} message
   */
  ErrorAlert = (message, text = 'Try again', title = 'OOPS...') => {
    Alert.alert(title, message, [{ text, onPress: () => {} }], {
      cancelable: false,
    });
  };


  render() {
    return <></>;
  }
}

const SpotifyContainer = (props) => (
  <AuthContext.Consumer>
    {({ authenticate }) => (
      <SpotifyServices {...props} authenticate={authenticate}>
        {() => (
          <SpotifyContainerUnplugged />
        )}
      </SpotifyServices>

    )}
  </AuthContext.Consumer>
);
export default SpotifyContainer;
