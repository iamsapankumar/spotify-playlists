import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 10,
  },
  left: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default styles;
