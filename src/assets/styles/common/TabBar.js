import { StyleSheet } from 'react-native';
import { ACCENT_LIGHT_COLOR } from './Variables';

export default StyleSheet.create({
  tabBar: {
    backgroundColor: ACCENT_LIGHT_COLOR,
    height: 'auto',
  },
  tab: {
    height: 64,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4
  },
  label: {
    fontFamily: 'oxygen',
    fontSize: 11,
  }
});
