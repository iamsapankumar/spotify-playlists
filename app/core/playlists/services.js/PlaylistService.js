import { Component } from 'react';
import PropTypes from 'prop-types';

const noop = () => {};

export default class PlaylistService extends Component {
  static defaultProps = {
    url: '',
    onError: noop,
  };

  constructor(props) {
    super(props);
    this.state = {
    //   loading: false,
    //   data: [],
    //   error: false,
    //   response: {},
    };
  }

  fetchPlaylists = () => {
    const { onError } = this.props;
    // try {
    //   console.log('fetching playlists');
    // } catch (e) {
    //   onError(e);
    //   return e;
    // }
    return true;
  }

  render() {
    const { children } = this.props;
    const { response, error, loading } = this.state;
    const { fetchPlaylists } = this;

    return children({
      response, error, loading, fetchPlaylists,
    });
  }
}

PlaylistService.propTypes = {
  url: PropTypes.string,
  onError: PropTypes.func,
  children: PropTypes.func,
};
PlaylistService.defaultProps = {
  url: '',
  onError: noop,
  children: noop,
};
