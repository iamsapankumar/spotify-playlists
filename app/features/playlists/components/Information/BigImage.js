import React from 'react';
import {
  ImageBackground, StyleSheet, View,
} from 'react-native';
import PropTypes from 'prop-types';

const BigImage = ({ source }) => (
  <View style={styles.container}>
    <ImageBackground source={{ uri: source || '' }} style={styles.image} resizeMode="contain" />
  </View>
);

const styles = StyleSheet.create({
  container: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 20,
    shadowOffset: { height: 10 },
    shadowRadius: 20,
    shadowColor: 'black',
    shadowOpacity: 0.3,
  },
  image: {
    flex: 1,
    width: '100%',
  },
});
BigImage.propTypes = {
  source: PropTypes.any,
};
BigImage.defaultProps = {
  source: '',
};
export default BigImage;
