import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, WINDOW_HEIGHT } from './Variables';

export default StyleSheet.create({
  page: {
    width: WINDOW_WIDTH,
    height: WINDOW_HEIGHT
  },
  slide: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  },
});
