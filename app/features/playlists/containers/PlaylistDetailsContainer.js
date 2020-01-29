/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import { Alert, View } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import AuthContext from '../../../core/auth/AuthContext';
import SpotifyServices from '../../../core/playlists/services.js/SpotifyService';
import BigImage from '../components/PlaylistInformation/BigImage';
import Description from '../components/PlaylistInformation/Description';
import PlayListDetail from '../components/List/PlaylistDetail';

class PlaylistDetailContainerUnplugged extends Component {
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
    const { navigation, fetchPlaylistDetails } = this.props;
    fetchPlaylistDetails(navigation.state.params.id);
  }

  navigateToSongDetails = (details) => {
    const { navigation } = this.props;
    return navigation.navigate('SongDetail', details);
  }

  render() {
    const { playlistDetail } = this.props;
    const image = playlistDetail?.images?.slice(0);
    return (
      <>
        <View style={{ flex: 1 }}>
          <BigImage source={image ? image[0].url : ''} />
          <Description title={playlistDetail?.name} description={playlistDetail?.description} />
          <PlayListDetail
            tracks={playlistDetail?.tracks?.items}
            onPress={this.navigateToSongDetails}
          />
        </View>
      </>
    );
  }
}

const PlaylistDetailContainer = (props) => (
  <AuthContext.Consumer>
    {({ authenticate, isAuthenticated, rehydrated }) => (
      <SpotifyServices
        {...props}
        authenticate={authenticate}
        isAuthenticated={isAuthenticated}
        rehydrated={rehydrated}
      >
        {({ fetchPlaylistDetails, playlistDetail }) => (
          <PlaylistDetailContainerUnplugged
            fetchPlaylistDetails={fetchPlaylistDetails}
            playlistDetail={playlistDetail}
            {...props}
          />
        )}
      </SpotifyServices>
    )}
  </AuthContext.Consumer>
);
PlaylistDetailContainerUnplugged.propTypes = {
  navigation: PropTypes.object,
  fetchPlaylistDetails: PropTypes.func,
  playlistDetail: PropTypes.array,
};
PlaylistDetailContainerUnplugged.defaultProps = {
  navigation: {},
  fetchPlaylistDetails: () => {},
  playlistDetail: [],
};
export default withNavigation(PlaylistDetailContainer);
