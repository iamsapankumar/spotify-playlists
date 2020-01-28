import React, { Component } from 'react';
import {
  Image, StyleSheet,
} from 'react-native';
import Header from '../../../shared/Header/Header';

const LOGO = require('../../../assets/spotify-playlists-logo.png');

export default class Playlists extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }


  render() {
    return (
      <>
        <Header center={<Image source={LOGO} style={styles.image} />} />
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
