import { Alert } from 'react-native';
import React, { Component } from 'react';
import PlaylistService from '../../../core/playlists/services.js/PlaylistService';


class PlaylistContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
      return (
        <PlaylistService>
          {({ response, loading, error }) => (
            <></>
          )}
        </PlaylistService>
      );
    }
}

export default PlaylistContainer;
