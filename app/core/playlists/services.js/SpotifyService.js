/* eslint-disable camelcase */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthSession } from 'expo';
import moment from 'moment';
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
    };
  }

  componentDidUpdate = (prevProps) => {
    const { isAuthenticated, rehydrated } = this.props;
    if (prevProps.rehydrated !== rehydrated && !isAuthenticated && rehydrated) {
      this.getAuthorizationCode();
    }
  }


  getAuthorizationCode = async () => {
    const { authenticate } = this.props;
    const result = await AuthSession.startAsync({
      authUrl: `${Config.spotifyUrl.base}?client_id=${
        Config.spotifyUrl.client_id
      }&response_type=${
        Config.spotifyUrl.response_type
      }&redirect_uri=${encodeURIComponent(Config.spotifyUrl.redirect_uri)}`,
    });
    const token = result?.params?.access_token;
    const tokenDate = moment().format('X');
    if (token) return authenticate({ token, tokenDate });

    this.setState({ token });

    return token;
  };


  render() {
    const { children } = this.props;
    const {
      response, error, loading, token,
    } = this.state;

    return children({
      response, error, loading, token,
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
