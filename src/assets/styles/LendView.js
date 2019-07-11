import { StyleSheet } from 'react-native';
import {
  ACCENT_COLOR
} from './common/Variables';

export default StyleSheet.create({
  container: {
    flex: 1
  },
  editButton: {
    width: 34,
    height: 34,
    right: 10
  },
  details: {
    flex: 1,
    paddingHorizontal: 15,
    paddingVertical: 18,
    backgroundColor: '#ffffff'
  },
  status: {
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  statusButton: {
    backgroundColor: 'transparent'
  },
  statusButtonText: {
    color: ACCENT_COLOR,
    fontWeight: 'normal',
    fontSize: 11,
    letterSpacing: 2,
    paddingVertical: 4,
    paddingHorizontal: 0,
    textTransform: 'uppercase'
  },
  buttons: {
    marginTop: 24,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row'
  },
  button: {
    margin: 8
  }
});
