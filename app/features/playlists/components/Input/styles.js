import {
  StyleSheet,
} from 'react-native';
import * as Vars from 'shared/Vars/Vars';

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
});
export default styles;
