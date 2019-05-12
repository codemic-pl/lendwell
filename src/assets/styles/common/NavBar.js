import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from './Variables';

export default StyleSheet.create({
  navBar: {
    width: WINDOW_WIDTH,
    flexDirection: 'row'
  },
  titleHolder: {
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'oxygen',
    position: 'relative',
    fontSize: 16
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
});
