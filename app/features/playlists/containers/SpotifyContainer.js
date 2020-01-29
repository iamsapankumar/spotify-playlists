/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import { Alert } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
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

  componentDidUpdate(prevProps) {
    console.log(prevProps, this.props);
    if (prevProps.isAuthenticated !== this.props.isAuthenticated && this.props.isAuthenticated && this.props.rehydrated) {
      this.props.fetchPlaylists();
    }
  }

  navigateToPlaylistDetail = (details) => {
    const { navigation } = this.props;
    navigation.navigate('PlaylistDetail', details);
  }

  render() {
    const { playlists } = this.props;
    return (
      <>
        <Playlist playlistData={playlists} onPress={this.navigateToPlaylistDetail} />
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
        {({ fetchPlaylists, playlists, token }) => (
          <SpotifyContainerUnplugged
            fetchPlaylists={fetchPlaylists}
            playlists={playlists}
            isAuthenticated={isAuthenticated}
            rehydrated={rehydrated}
            token={token}
          />
        )}
      </SpotifyServices>
    )}
  </AuthContext.Consumer>
);
SpotifyContainerUnplugged.propTypes = {
  playlists: PropTypes.arrayOf(PropTypes.object),
  fetchPlaylists: PropTypes.func,
  navigation: PropTypes.object,
};
SpotifyContainerUnplugged.defaultProps = {
  playlists: [],
  fetchPlaylists: () => {},
  navigation: {},
};
export default withNavigation(SpotifyContainer);
