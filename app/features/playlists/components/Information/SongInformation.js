import React from 'react';
import {
  StyleSheet, View, Text, TouchableOpacity, Image,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Vars from '../../../../shared/Vars/Vars';

const SPOTIFY_LOGO = require('../../../../assets/spotify.png');

const SongInformation = ({
  duration, artists, onPress, popularity,
}) => {
  const minutes = duration && Math.floor(duration / 60000);
  const seconds = duration && ((duration % 60000) / 1000).toFixed(0);
  const formattedDuration = duration && `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <View style={styles.innerContainerChild}>
          <Text style={styles.textTitle}>
            Duration:
            {' '}
            <Text style={{ color: 'black' }}>{formattedDuration}</Text>
          </Text>
        </View>
        <View style={styles.innerContainerChild}>
          <Text style={styles.textTitle}>
            Artist:
            {'\n'}
            {artists?.map((el) => (
              <Text style={[styles.textTitle, { color: 'black' }]}>
                {el.name}
                {' '}
                {'\n'}
              </Text>
            ))}
          </Text>
        </View>
      </View>
      <View style={styles.innerContainer}>
        <TouchableOpacity
          style={[styles.innerContainerChild, { padding: 35 }]}
          onPress={onPress}
        >
          <Text style={styles.textTitle}>Listen on Spotify</Text>
          <Image source={SPOTIFY_LOGO} resizeMode="contain" style={styles.image} />
        </TouchableOpacity>
        <View style={styles.innerContainerChild}>
          <Text style={styles.textTitle}>
            Popularity:
            <Text style={{ color: 'black' }}>
              {' '}
              {popularity / 100}
            </Text>
          </Text>

        </View>
      </View>
    </View>
  );
};
SongInformation.propTypes = {
  duration: PropTypes.string,
  artists: PropTypes.string,
  onPress: PropTypes.string,
  popularity: PropTypes.string,

};
SongInformation.defaultProps = {
  duration: '',
  artists: '',
  onPress: '',
  popularity: '',
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  innerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  innerContainerChild: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitle: {
    color: Vars.themeColors.main,
  },
  image: {
    height: 40,
    width: 40,
    margin: 5,
  },
});

export default SongInformation;
