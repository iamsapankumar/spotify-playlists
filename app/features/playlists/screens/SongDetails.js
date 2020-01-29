/* eslint-disable no-console */
import React, { Component } from 'react';
import {
  Image, StyleSheet,
} from 'react-native';
import PropTypes from 'prop-types';
import Header from '../../../shared/Header/Header';
import SongsDetailsContainer from '../containers/SongsDetailsContainer';
import * as Vars from '../../../shared/Vars/Vars';

const LOGO = require('../../../assets/spotify-playlists-logo.png');
const BACK_LOGO = require('../../../assets/right.png');

export default class PlaylistDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  goBack = () => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <>
        <Header leftPress={this.goBack} left={<Image source={BACK_LOGO} style={styles.back} resizeMode="contain" />} center={<Image source={LOGO} style={styles.image} />} />
        <SongsDetailsContainer {...this.props} />
      </>
    );
  }
}
PlaylistDetails.propTypes = {
  navigation: PropTypes.object,
};
PlaylistDetails.defaultProps = {
  navigation: {},
};
const styles = StyleSheet.create({
  image: {
    height: 150,
    width: 150,
  },
  back: {
    height: 20,
    width: 20,
    transform: [{ rotate: '180deg' }],
    tintColor: Vars.themeColors.main,
  },
});
