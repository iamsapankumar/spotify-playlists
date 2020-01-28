import { StyleSheet, Dimensions } from 'react-native';
import * as Vars from 'shared/Vars/Vars';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: 150,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  imageContainer: {
    flex: 1.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    flex: 2,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  right: {
    flex: 0.7,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: width / 4,
    width: width / 4,
  },
  rightIcon: {
    height: 20,
    width: 20,
    tintColor: Vars.themeColors.main,
  },
  text: {
    color: Vars.themeColors.three,
  },
});
export default styles;
