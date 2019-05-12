import { StyleSheet } from 'react-native';
import { GRAY_COLOR, ACCENT_COLOR } from './common/Variables';

export default StyleSheet.create({
  swiperButtons: {
    padding: 8,
    borderRadius: 8,
    height: 64,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 15,
    marginTop: -32
  },
  swiperButton: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  swiperButtonText: {
    color: GRAY_COLOR,
    fontFamily: 'oxygen',
    fontWeight: 'bold',
    fontSize: 15
  },
  swiperButtonActive: {
    color: ACCENT_COLOR
  },
  swiperButtonSeparator: {
    width: 1,
    height: 48,
    backgroundColor: '#f9f9f9'
  }
});
