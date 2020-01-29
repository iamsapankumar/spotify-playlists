/* eslint-disable class-methods-use-this */
/* eslint-disable react/sort-comp */
import { View, Linking } from 'react-native';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withNavigation } from 'react-navigation';
import AuthContext from '../../../core/auth/AuthContext';
import SpotifyServices from '../../../core/playlists/services.js/SpotifyService';
import BigImage from '../components/Information/BigImage';
import Description from '../components/Information/Description';
import SongDetails from '../components/Information/SongInformation';

class SongsDetailsContainerUnplugged extends Component {
  componentDidMount() {
    const { navigation, fetchSongDetails } = this.props;
    fetchSongDetails(navigation.state.params.track.id);
  }

  navigateToSongDetails = (details) => {
    const { navigation } = this.props;
    return navigation.navigate('SongDetail', details);
  }

  listenOnSpotify = () => {
    const { songDetails } = this.props;
    Linking.openURL(songDetails.album.external_urls.spotify);
  }

  render() {
    const { songDetails } = this.props;
    const image = songDetails?.album?.images?.slice(0);
    return (
      <>
        <View style={{ flex: 1 }}>
          <BigImage source={image ? image[0].url : ''} />
          <Description title={songDetails?.name} description={songDetails?.album?.name} black />
          <SongDetails
            duration={songDetails.duration_ms}
            artists={songDetails.artists}
            popularity={songDetails.popularity}
            onPress={this.listenOnSpotify}
          />
        </View>
      </>
    );
  }
}

const SongsDetailsContainer = (props) => (
  <AuthContext.Consumer>
    {({ authenticate, isAuthenticated, rehydrated }) => (
      <SpotifyServices
        {...props}
        authenticate={authenticate}
        isAuthenticated={isAuthenticated}
        rehydrated={rehydrated}
      >
        {({ fetchSongDetails, songDetails }) => (
          <SongsDetailsContainerUnplugged
            songDetails={songDetails}
            fetchSongDetails={fetchSongDetails}
            {...props}
          />
        )}
      </SpotifyServices>
    )}
  </AuthContext.Consumer>
);
SongsDetailsContainerUnplugged.propTypes = {
  navigation: PropTypes.object,
  fetchSongDetails: PropTypes.func,
  songDetails: PropTypes.object,
};
SongsDetailsContainerUnplugged.defaultProps = {
  navigation: {},
  fetchSongDetails: () => {},
  songDetails: {},
};
export default withNavigation(SongsDetailsContainer);
