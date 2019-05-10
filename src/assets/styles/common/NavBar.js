import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH } from './Variables';

export default StyleSheet.create({
  navBar: {
    width: WINDOW_WIDTH
  },
  titleHolder: {
    padding: 28,
    alignItems: 'center',
    flex: 1
  },
  title: {
    color: '#FFFFFF',
    fontFamily: 'oxygen',
    fontSize: 16
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
});
