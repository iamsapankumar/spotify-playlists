/* eslint-disable no-labels */
/* eslint-disable no-label-var */
import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RIGHT_ICON = require('../../../../assets/right.png');

const PlaylistDetailItem = ({
  source, name, onPress, artists,
}) => {
  const formattedArtists = artists.map((el) => ` ${el.name}`).toString();
  return (
    <>
      <TouchableOpacity style={styles.songsContainer} onPress={onPress}>
        <View style={styles.imageContainer}>
          <Image source={{ uri: source || '' }} style={styles.rooundImage} resizeMode="contain" />
        </View>
        <View style={styles.textContainer}>
          <Text style={{ fontWeight: 'bold' }}>{` ${name}`}</Text>
          <Text numberOfLines={1}>{formattedArtists}</Text>
        </View>
        <View style={styles.right}>
          <Image source={RIGHT_ICON} style={styles.rightIcon} />
        </View>
      </TouchableOpacity>
    </>
  );
};

PlaylistDetailItem.propTypes = {
  source: PropTypes.any,
  name: PropTypes.string,
  onPress: PropTypes.func,
  artists: PropTypes.arrayOf(PropTypes.object),
};

PlaylistDetailItem.defaultProps = {
  source: 0,
  name: '',
  artists: [],
  onPress: () => {},
};

export default PlaylistDetailItem;
