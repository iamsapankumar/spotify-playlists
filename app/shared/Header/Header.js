/* eslint-disable react/prop-types */
import React from 'react';
import { TouchableOpacity, SafeAreaView } from 'react-native';
import styles from './styles';

const Header = ({
  left, center, right, leftPress, rightPress,
}) => (
  <SafeAreaView style={styles.container}>
    <TouchableOpacity style={styles.left} onPress={leftPress}>
      {left}
    </TouchableOpacity>
    <TouchableOpacity style={styles.center}>{center}</TouchableOpacity>
    <TouchableOpacity style={styles.right} onPress={rightPress}>
      {right}
    </TouchableOpacity>
  </SafeAreaView>
);

export default Header;
