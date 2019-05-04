import { StyleSheet } from 'react-native';
import { WINDOW_WIDTH, ACCENT_COLOR } from './Variables';

export default StyleSheet.create({
  fullScreen: {
    width: WINDOW_WIDTH,
    flex: 1,
  },
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  pagination: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 0,
    bottom: 64
  },
  dot: {
    backgroundColor: '#ffffff',
    width: 24,
    height: 4,
    marginLeft: 0,
    marginRight: 16,
    marginTop: 0,
    marginBottom: 0
  },
  activeDot: {
    backgroundColor: ACCENT_COLOR,
  },
  footer: {
    backgroundColor: 'transparent',
    position: 'absolute',
    bottom: 0,
    left: 74,
    right: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  buttonWrapper: {
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: 0,
    bottom: 40
  },
  buttonContinue: {
    backgroundColor: ACCENT_COLOR,
    borderRadius: 64,
    width: 64,
    height: 64,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonFinish: {
    backgroundColor: '#FFFFFF',
    borderRadius: 400
  },
  buttonFinishText: {
    lineHeight: 20,
    fontSize: 16,
    fontFamily: 'oxygen',
    fontWeight: 'bold',
    color: ACCENT_COLOR,
    paddingTop: 15,
    paddingBottom: 17,
    paddingHorizontal: 24
  }
});
