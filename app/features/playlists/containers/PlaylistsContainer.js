/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import { ActivityIndicator } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AuthContext from '../../../core/auth/AuthContext';
import SpotifyServices from '../../../core/playlists/services.js/SpotifyService';
import Playlist from '../components/List/Playlist';
import * as Vars from '../../../shared/Vars/Vars';
import Input from '../components/Input/Input';

class SpotifyContainerUnplugged extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
  }

  changeText = (searchText) => {
    this.setState({ searchText });
  }

  componentDidUpdate(prevProps) {
    const { isAuthenticated, rehydrated } = this.props;
    if (prevProps.isAuthenticated !== isAuthenticated && isAuthenticated && rehydrated) {
      this.props.fetchPlaylists();
    }
  }

  searchPlaylists = () => {
    const { searchText } = this.state;
    const { fetchPlaylists } = this.props;
    fetchPlaylists(searchText);
  }

  navigateToPlaylistDetail = (details) => {
    const { navigation } = this.props;
    return navigation.navigate('PlaylistDetail', details);
  }

  render() {
    const { playlists, loading } = this.props;
    return (
      <>
        <Input text={this.changeText} onPress={this.searchPlaylists} />
        {loading && <ActivityIndicator color={Vars.themeColors.main} size="large" style={{ paddingTop: 30 }} />}
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
        {({
          fetchPlaylists, playlists, token, loading, error,
        }) => (
          <SpotifyContainerUnplugged
            fetchPlaylists={fetchPlaylists}
            playlists={playlists}
            isAuthenticated={isAuthenticated}
            rehydrated={rehydrated}
            token={token}
            loading={loading}
            error={error}
            {...props}
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
  loading: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
  rehydrated: PropTypes.bool,
};
SpotifyContainerUnplugged.defaultProps = {
  playlists: [],
  fetchPlaylists: () => {},
  navigation: {},
  loading: true,
  isAuthenticated: false,
  rehydrated: false,
};

export default SpotifyContainer;
