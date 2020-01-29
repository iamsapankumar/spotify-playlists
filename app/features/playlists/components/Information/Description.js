import React from 'react';
import {
  StyleSheet, View, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import * as Vars from '../../../../shared/Vars/Vars';

const Description = ({
  description, title,
}) => (
  <View style={styles.container}>
    <View style={styles.shadow} />
    <Text style={styles.titleText}>{title}</Text>
    <Text style={styles.descriptionText}>{description}</Text>
  </View>
);
Description.propTypes = {
  description: PropTypes.string,
  title: PropTypes.string,

};
Description.defaultProps = {
  description: '',
  title: '',
};
const styles = StyleSheet.create({
  container: {
    height: 90,
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
  },
  shadow: {
    shadowOffset: { height: 2 },
    backgroundColor: 'white',
    opacity: 0.07,
    alignSelf: 'center',
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    bottom: 0,
    left: 0,
    height: 10,
    width: '100%',
    position: 'absolute',
  },
  titleText: {
    color: Vars.themeColors.main,
    fontWeight: 'bold',
  },
  descriptionText: {
    margin: 10,
    textAlign: 'center',
  },
});

export default Description;
