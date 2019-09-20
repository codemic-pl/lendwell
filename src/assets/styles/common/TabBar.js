import { StyleSheet } from 'react-native';
import { ACCENT_LIGHT_COLOR, WINDOW_WIDTH } from './Variables';

export default StyleSheet.create({
  tabBar: {
    position: 'absolute',
    width: WINDOW_WIDTH,
    height: 'auto',
    bottom: 0
  },
  tabBarBackground: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: ACCENT_LIGHT_COLOR
  },
  tab: {
    height: 64,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 4,
    flex: 1
  },
  label: {
    fontFamily: 'oxygen',
    fontWeight: 'bold',
    marginTop: 4,
    fontSize: 11,
  },
  addLendButton: {
    backgroundColor: ACCENT_LIGHT_COLOR,
    borderWidth: 5,
    borderColor: '#fff',
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    width: 64,
    height: 64,
    position: 'absolute',
    top: -32,
    left: (WINDOW_WIDTH / 2) - 32,
    zIndex: 2
  }
});
