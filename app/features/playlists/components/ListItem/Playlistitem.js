import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import { noop } from '@babel/types';
import styles from './styles';

const RIGHT_ICON = require('../../../../assets/right.png');

const PlaylistItem = ({
  source, playlistName, songCount, onPress,
}) => (
  <>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={source} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text>{playlistName}</Text>
        <Text style={styles.text}>
          songs:
          {' '}
          {songCount}
        </Text>
      </View>
      <View style={styles.right}>
        <Image source={RIGHT_ICON} style={styles.rightIcon} />
      </View>
    </TouchableOpacity>
  </>
);

PlaylistItem.propTypes = {
  source: PropTypes.any,
  playlistName: PropTypes.string,
  songCount: PropTypes.number,
  onPress: PropTypes.func,
};

PlaylistItem.defaultProps = {
  source: 0,
  playlistName: '',
  songCount: 0,
  onPress: noop,
};

export default PlaylistItem;
