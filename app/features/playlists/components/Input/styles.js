import {
  StyleSheet, Dimensions,
} from 'react-native';
import * as Vars from 'shared/Vars/Vars';

const { width } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    height: 45,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
    paddingHorizontal: 30,
  },
  button: {
    flex: 0.4,
    backgroundColor: Vars.themeColors.main,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 20,
  },
  textInput: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 20,
  },
  shadow: {
    shadowOffset: { height: 2 },
    backgroundColor: 'white',
    opacity: 0.07,
    alignSelf: 'center',
    shadowRadius: 5,
    shadowColor: 'black',
    shadowOpacity: 1,
    bottom: -13,
    right: 0,
    height: 5,
    width,
    position: 'absolute',
  },
});
export default styles;
