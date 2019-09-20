import { StyleSheet } from 'react-native';
import {
  GRAY_COLOR,
  TEXT_COLOR
} from './Variables';

export default StyleSheet.create({
  label: {
    fontFamily: 'oxygen',
    fontWeight: 'normal',
    fontSize: 11,
    letterSpacing: 2,
    color: GRAY_COLOR,
    textTransform: 'uppercase'
  },
  input: {
    textAlignVertical: 'top',
    color: TEXT_COLOR,
    flex: 1,
    fontSize: 15,
    lineHeight: 20,
    fontFamily: 'oxygen',
    fontWeight: 'bold',
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 24,
    paddingRight: 24
  },
  inputContainer: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: GRAY_COLOR
  },
  disabled: {

  },
  container: {
    marginVertical: 4,
  },
  containerInline: {
    flex: 1
  },
  containerWithLabel: {
    paddingTop: 8
  }
});
