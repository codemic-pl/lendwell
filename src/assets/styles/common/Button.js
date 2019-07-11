import { StyleSheet } from 'react-native';
import {
  ACCENT_VERY_DARK_COLOR,
  LIGHT_TEXT_COLOR,
  NEGATIVE_COLOR
} from './Variables';

export default StyleSheet.create({
  text: {
    alignSelf: 'center',
    color: LIGHT_TEXT_COLOR,
    fontWeight: 'bold',
    lineHeight: 20,
    fontSize: 16,
    fontFamily: 'oxygen',
    paddingVertical: 16,
    paddingHorizontal: 24
  },
  button: {
    minHeight: 52,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: ACCENT_VERY_DARK_COLOR,
    borderRadius: 26
  },
  buttonNegative: {
    backgroundColor: NEGATIVE_COLOR
  }
});
