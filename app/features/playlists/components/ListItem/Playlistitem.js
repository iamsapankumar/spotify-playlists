import React from 'react';
import {
  Text, View, Image, TouchableOpacity,
} from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

const RIGHT_ICON = require('../../../../assets/right.png');

const PlaylistItem = ({
  source, name, songCount, onPress,
}) => (
  <>
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: source || '' }} style={styles.image} resizeMode="contain" />
      </View>
      <View style={styles.textContainer}>
        <Text>{name}</Text>
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
  name: PropTypes.string,
  songCount: PropTypes.number,
  onPress: PropTypes.func,
};

PlaylistItem.defaultProps = {
  source: 0,
  name: '',
  songCount: 0,
  onPress: () => {},
};

export default PlaylistItem;
