import { StyleSheet } from 'react-native';
import { ACCENT_COLOR, LIGHT_TEXT_COLOR } from './Variables';

export default StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: LIGHT_TEXT_COLOR,
    fontSize: 14,
    lineHeight: 21,
    paddingVertical: 12
  },
  button: {
    height: 48,
    alignSelf: 'stretch',
    backgroundColor: ACCENT_COLOR,
    borderRadius: 15
  }
});
