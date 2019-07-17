import { StyleSheet } from 'react-native';
import { ACCENT_LIGHT_COLOR, WINDOW_WIDTH } from './Variables';

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
