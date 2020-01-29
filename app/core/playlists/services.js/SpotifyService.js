/* eslint-disable camelcase */
import { Component } from 'react';
import { AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { AuthSession } from 'expo';
import moment from 'moment';
import Axios from 'axios';
import * as Config from '../../../config/spotify.config';

const noop = () => {};

export default class SpotifyServices extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: '',
      error: false,
      response: {},
      playlists: [],
      playlistDetail: {},
      songDetails: {},
    };
  }

  componentDidUpdate = async (prevProps) => {
    const { isAuthenticated, rehydrated } = this.props;
    if (prevProps.rehydrated !== rehydrated && !isAuthenticated && rehydrated) {
      await this.getAuthorizationCode();
      await this.fetchPlaylists();
    }
  }


  getAuthorizationCode = async () => {
    const { authenticate } = this.props;
    this.setState({ loading: true });
    const authUrl = `${Config.spotifyUrl.base}authorize?client_id=${
      Config.spotifyUrl.client_id
    }&response_type=${
      Config.spotifyUrl.response_type
    }&redirect_uri=${encodeURIComponent(Config.spotifyUrl.redirect_uri)}&scope=user-read-private`;

    const result = await AuthSession.startAsync({
      authUrl,
    });
    const token = result?.params?.access_token;
    const tokenDate = moment().format('X');
    if (token) return authenticate({ token, tokenDate });
    this.setState({ token });

    return token;
  };

  fetchPlaylists = async (param) => {
    const token = await AsyncStorage.getItem('token');
    this.setState({ loading: true });
    let keyword = param;
    keyword = param ? keyword : 'rock classics';
    try {
      const url = `${Config.spotifyUrl.playlists}v1/search?q=${keyword}&&market=from_token&type=playlist`;
      const results = await Axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ playlists: results?.data?.playlists?.items, loading: false });
    } catch (e) {
      this.setState({ error: e, loading: false });
      return e;
    }
    return true;
  }

  fetchPlaylistDetails = async (playlistId) => {
    const token = await AsyncStorage.getItem('token');
    this.setState({ loading: true });
    try {
      const url = `${Config.spotifyUrl.playlists}v1/playlists/${playlistId}`;
      const results = await Axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ playlistDetail: results.data, loading: false });
    } catch (e) {
      this.setState({ error: e, loading: false });
      return e;
    }
    return true;
  }

  fetchSongDetails = async (trackId) => {
    const token = await AsyncStorage.getItem('token');
    this.setState({ loading: true });
    try {
      const url = `${Config.spotifyUrl.playlists}v1/tracks/${trackId}`;
      const results = await Axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      this.setState({ songDetails: results.data, loading: false });
    } catch (e) {
      return e;
    }
    return true;
  }

  render() {
    const { children } = this.props;
    const {
      response, error, loading, token, playlists, playlistDetail, songDetails,
    } = this.state;
    const { fetchPlaylists, fetchPlaylistDetails, fetchSongDetails } = this;
    return children({
      response,
      error,
      loading,
      token,
      fetchPlaylists,
      playlists,
      fetchPlaylistDetails,
      playlistDetail,
      fetchSongDetails,
      songDetails,
    });
  }
}

SpotifyServices.propTypes = {
  children: PropTypes.func,
  authenticate: PropTypes.func,
  rehydrated: PropTypes.bool,
  isAuthenticated: PropTypes.bool,
};

SpotifyServices.defaultProps = {
  children: noop,
  authenticate: noop,
  rehydrated: false,
  isAuthenticated: false,
};
