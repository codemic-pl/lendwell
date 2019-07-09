import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from './Variables';

export default StyleSheet.create({
  navBar: {
    width: WINDOW_WIDTH,
    flexDirection: 'row'
  },
  navBarContainer: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    flex: 1
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'oxygen',
    position: 'relative',
    fontSize: 16
  },
  button: {
    width: 45,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
  },
  leftButton: {
    left: 0
  },
  rightButton: {
    right: 0
  }
});
