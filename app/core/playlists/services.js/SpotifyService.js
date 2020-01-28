/* eslint-disable camelcase */
import { Component } from 'react';
import PropTypes from 'prop-types';
import { AuthSession } from 'expo';
import * as Config from '../../../config/spotify.config';

const noop = () => {};

export default class SpotifyServices extends Component {
  static defaultProps = {
    url: '',
    onError: noop,
  };

  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      token: '',
      error: false,
      response: {},
    };
  }

  componentDidMount = () => {
    this.getAuthorizationCode();
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

    authenticate({ token });

    await this.setState({ token });

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
  url: PropTypes.string,
  onError: PropTypes.func,
  children: PropTypes.func,
  authenticate: PropTypes.func,
};
SpotifyServices.defaultProps = {
  url: '',
  onError: noop,
  children: noop,
  authenticate: noop,
};
