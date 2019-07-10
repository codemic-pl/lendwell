import { StyleSheet } from 'react-native';
import {
  GRAY_COLOR,
  TEXT_COLOR
} from './Variables';

export default StyleSheet.create({
  detail: {
    paddingVertical: 4
  },
  label: {
    fontFamily: 'oxygen',
    fontWeight: 'normal',
    fontSize: 11,
    letterSpacing: 2,
    color: GRAY_COLOR,
    textTransform: 'uppercase'
  },
  value: {
    fontFamily: 'oxygen',
    fontWeight: 'bold',
    fontSize: 17,
    letterSpacing: 0,
    color: TEXT_COLOR
  }
});
