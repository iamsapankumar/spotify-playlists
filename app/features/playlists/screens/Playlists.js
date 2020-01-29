/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Image, StyleSheet,
} from 'react-native';
import Header from '../../../shared/Header/Header';
import PlaylistsContainer from '../containers/PlaylistsContainer';

const LOGO = require('../../../assets/spotify-playlists-logo.png');

export default class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  navigateToPlaylistDetail = (details) => {
    console.log(details);
    return details;
  }

  render() {
    return (
      <>
        <Header center={<Image source={LOGO} style={styles.image} />} />
        <PlaylistsContainer {...this.props} />
      </>
    );
  }
}
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
});
