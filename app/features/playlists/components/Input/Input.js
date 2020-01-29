import React from 'react';
import {
  TextInput, View, TouchableOpacity, Text,
} from 'react-native';
import * as Vars from 'shared/Vars/Vars';
import PropTypes from 'prop-types';
import styles from './styles';

const Input = ({
  text,
  onPress,
}) => (
  <View style={styles.container}>
    <TextInput
      style={styles.textInput}
      onChangeText={(event) => text(event)}
      placeholderTextColor={Vars.themeColors.main}
      placeholder="Search for genre or artist"
    />
    <TouchableOpacity
      onPress={onPress}
      style={styles.button}
    >
      <Text style={{ color: 'white' }}>Search</Text>
    </TouchableOpacity>
  </View>
);
Input.propTypes = {
  onPress: PropTypes.func,
  text: PropTypes.func,
};
Input.defaultProps = {
  onPress: () => {},
  text: () => {},
};


export default Input;
