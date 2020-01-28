/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import { Alert } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../core/auth/AuthContext';
import SpotifyServices from '../../../core/playlists/services.js/SpotifyService';
import Playlist from '../components/List/Playlist';

class SpotifyContainerUnplugged extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     loading: false,
  //   };
  // }


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

  componentDidMount() {
    this.props.fetchPlaylists();
  }

  render() {
    return (
      <>
        <Playlist playlistData={this.props.playlists} />
      </>
    );
  }
}

const SpotifyContainer = (props) => (
  <AuthContext.Consumer>
    {({ authenticate, isAuthenticated, rehydrated }) => (
      <SpotifyServices
        {...props}
        authenticate={authenticate}
        isAuthenticated={isAuthenticated}
        rehydrated={rehydrated}
      >
        {({ fetchPlaylists, playlists }) => (
          <SpotifyContainerUnplugged fetchPlaylists={fetchPlaylists} playlists={playlists} />
        )}
      </SpotifyServices>
    )}
  </AuthContext.Consumer>
);
SpotifyContainerUnplugged.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object),
  fetchPlaylists: PropTypes.func,
};
SpotifyContainerUnplugged.defaultProps = {
  playlists: [],
  fetchPlaylists: PropTypes.func,
};
export default SpotifyContainer;
