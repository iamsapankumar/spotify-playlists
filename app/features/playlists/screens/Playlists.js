/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Image, StyleSheet,
} from 'react-native';
import Header from '../../../shared/Header/Header';
import Playlist from '../components/List/Playlist';


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
        <Playlist playlistData={[]} onPress={this.navigateToPlaylistDetail} />
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
